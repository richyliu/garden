<template>
  <f7-page>
    <f7-navbar>
      <f7-nav-left>
        <f7-link icon-if-ios="f7:menu" icon-if-md="material:menu" panel-open="left"></f7-link>
      </f7-nav-left>
      <f7-nav-title>Actions</f7-nav-title>
      <f7-nav-right>
        <f7-link icon-ios="f7:add" popup-open="#add-popup" @click="loadLocations"></f7-link>
      </f7-nav-right>
    </f7-navbar>

    <f7-toolbar>
      <f7-link>Left Link</f7-link>
      <f7-link>Right Link</f7-link>
    </f7-toolbar>

    <f7-block strong>
      <p>Welcome to Garden Manager!</p>
      <p>
        <f7-button @click="reload">Reload</f7-button>
      </p>
      <p>
        <f7-button @click="doRun">Do run</f7-button>
      </p>
    </f7-block>

    <f7-list media-list>
      <f7-list-item
        v-for="(action, key) in actions"
        :key="key"
        :title="action.type"
        :after="action.time.format('MM/DD h:mm')"
        :subtitle="action.location.name"
        :text="action.description"
        :link="`/dynamic-route/${action.id}/${key}/`"
        swipeout>
        <f7-swipeout-actions left>
          <f7-swipeout-button delete overswipe @click="remove(action, key)">
            <f7-icon material="delete"></f7-icon>
          </f7-swipeout-button>
        </f7-swipeout-actions>
        <f7-swipeout-actions right>
          <f7-swipeout-button delete overswipe color="green" @click="done(action, key)">
            <f7-icon material="check"></f7-icon>
          </f7-swipeout-button>
        </f7-swipeout-actions>
      </f7-list-item>
    </f7-list>

    <f7-popup id="add-popup">
      <f7-page>
        <f7-navbar>
          <f7-nav-left>
            <f7-link popup-close>Cancel</f7-link>
          </f7-nav-left>
          <f7-nav-title>New Action</f7-nav-title>
          <f7-nav-right>
            <f7-link @click="add">Add</f7-link>
          </f7-nav-right>
        </f7-navbar>

        <f7-block-title>Type</f7-block-title>
        <f7-list form class="long-list">
          <f7-list-item v-for="a in actionTypes" :key="a" radio name="type-radio" :value="a" :checked="a === 'popup.type'" @change="popup.type = a" :title="a"></f7-list-item>
        </f7-list>

        <f7-block-title>Locations</f7-block-title>
        <f7-list form class="long-list">
          <f7-list-item v-for="(a, key) in locations" :key="key" radio name="location-radio" :value="key" :checked="key === 'popup.type'" @change="popup.location = key" :title="a.name"></f7-list-item>
        </f7-list>

        <f7-block-title>General Info</f7-block-title>
        <f7-list form>
          <f7-list-item>
            <f7-input type="text" name="name" :value="popup.name" @input="popup.name = $event.target.value" placeholder="Plant Name"></f7-input>
          </f7-list-item>
          <f7-list-item>
            <f7-input type="text" name="description" :value="popup.description" @input="popup.description = $event.target.value" placeholder="Description"></f7-input>
          </f7-list-item>
          <f7-list-item>
            <!-- Need to use a regular input because Vue-Framework7 does not have a date picker -->
            <input type="text" placeholder="Planned Time" id="popup-date-picker" readonly="readonly" :value="new Date().toDateString()">
          </f7-list-item>
            <f7-list-item>
              <f7-label>Plot number (0 for whole plot)</f7-label>
              <f7-input>
                <f7-range min="0" :max="30" :value="popup.plotNum" @range:changed="popup.plotNum = $event" step="1" :label="true"></f7-range>
              </f7-input>
            </f7-list-item>
        </f7-list>

      </f7-page>
    </f7-popup>

  </f7-page>
</template>

<script>
  import moment from 'moment';
  import * as Static from '../js/static';
  import * as Database from '../js/database';
  import _ from 'lodash';


  export default {
    data() {
      this.loadActions();

      return {
        actionTypes: Static.ACTION_TYPES,
        locations: Static.LOCATIONS,
        actions: {},
        datePicker: null,
        popup: {
          type: '',
          location: '',
          name: '',
          description: '',
          plotNum: 0
        }
      };
    },
    methods: {
      remove(action, key) {
        // delete the action with the key
        Database.deleteDocument('actions', key, () => {
          // create a toast with an undo button
          let toast = this.$f7.toast.create({
            text: 'Successfully deleted action',
            closeButton: true,
            closeButtonText: 'Undo',
            on: {
              close: () => {
                // serialize the action
                // get the key of the location object
                action.location = _.filter(_.toPairs(Static.LOCATIONS), a => a[1] == action.location)[0][0];
                action.time = action.time.unix()*1000;

                // re add the action
                Database.addCollection(action, 'actions', () => {
                  this.$f7.dialog.alert('Undone!');
                  this.loadActions();
                }, error => {
                  console.error(error);
                  this.$f7.dialog.alert('Unable to undo');
                });
              }
            }
          });

          // open the success notification
          toast.open();
          // remove from actions list
          delete this.actions[key];
        }, error => {
          // alert user if error
          console.error(error);
          this.$f7.dialog.alert('Unable to delete action!');
        });
      },
      done(action) {
        console.log('done', action);
      },
      reload() {
        this.$f7router.refreshPage();
      },
      loadActions() {
        Database.readCollection('actions', data => {
          Object.keys(data).forEach(d => {
            data[d].location = Static.LOCATIONS[data[d].location];
            data[d].time = moment(data[d].time);
          });
          this.actions = data;
        }, error => {
          console.error(error);
          this.$f7.dialog.alert('Unable to read actions!');
        });

        // TODO: sort and group actions by time
      },
      add() {
        // get data from the popup
        let popupData = this.popup;

        // get the date value from the picker
        if (this.datePicker.getValue()) {
          popupData.time = this.datePicker.getValue()[0].getTime();
        } else {
          // cannot continue without a date
          this.$f7.dialog.alert('Planned date is required!');
          return;
        }

        // check for typ, location, and valid plotNum
        if (!popupData.type) {
          this.$f7.dialog.alert('A type is required');
        } else if (!popupData.location) {
          this.$f7.dialog.alert('An location is required');
        } else if (popupData.plotNum > popupData.location.numPlots) {
          this.$f7.dialog.alert('Invalid plot number');
        } else {
          // after ensuring form data is good, save to firebase
          Database.addCollection(popupData, 'actions', () => {
            // close and clear the popup
            this.$f7.popup.close('#add-popup');
            this.popup = {
              type: '',
              location: '',
              name: '',
              description: '',
              plotNum: 0
            };
            this.$f7.dialog.alert('Successfully created action!');

            // read actions (which now has new action)
            this.loadActions();
          }, error => {
            console.error(error);
            this.$f7.dialog.alert('Unable to created action!');
          });
        }
      },
      loadLocations() {
        this.locations = Static.LOCATIONS;
      },
      // temporary function for testing code
      doRun() {
        this.loadActions();
      }
    },
    mounted() {
      this.datePicker = this.$f7.calendar.create({
        inputEl: '#popup-date-picker',
        dateFormat: 'D M dd yyyy'
      });
      console.log('created date picker');
    }
  }
</script>

<style scoped>
  .long-list {
    max-height: 150px;
    overflow: scroll;
  }
</style>
