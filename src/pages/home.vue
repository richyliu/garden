<template>
  <f7-page>
    <f7-navbar>
      <f7-nav-left>
        <f7-link icon-if-ios="f7:menu" icon-if-md="material:menu" panel-open="left"></f7-link>
      </f7-nav-left>
      <f7-nav-title>Garden Manager</f7-nav-title>
      <f7-nav-right>
        <f7-link icon-ios="f7:add"></f7-link>
      </f7-nav-right>
    </f7-navbar>

    <f7-toolbar>
      <f7-link>Left Link</f7-link>
      <f7-link>Right Link</f7-link>
    </f7-toolbar>

    <f7-block strong>
        <p>{{foo}}Welcome to Garden Manager! {{text}}</p>
        <f7-row>
          <f7-col>
            <f7-button @click="reload">Reload</f7-button>
          </f7-col>
        </f7-row>
    </f7-block>

    <f7-list media-list>
      <f7-list-item
        v-for="action in actions"
        :key="action.id"
        :title="action.name"
        :after="action.time"
        :subtitle="action.location"
        :text="action.description"
        swipeout>
        <f7-swipeout-actions left>
          <f7-swipeout-button delete overswipe color="orange" @click="delay">
            <f7-icon material="access_time"></f7-icon>
          </f7-swipeout-button>
          <f7-swipeout-button delete @click="remove">
            <f7-icon material="delete"></f7-icon>
          </f7-swipeout-button>
        </f7-swipeout-actions>
        <f7-swipeout-actions right>
          <f7-swipeout-button @click="more">More</f7-swipeout-button>
          <f7-swipeout-button delete overswipe color="green" @click="check">
            <f7-icon material="check"></f7-icon>
          </f7-swipeout-button>
        </f7-swipeout-actions>
      </f7-list-item>
    </f7-list>



  </f7-page>
</template>
<script>
export default {
  data() {
    return {
      text: this.$root.text,
      foo: this.$root.foo(),
      actions: [
        {
          name: 'water',
          location: 'plot 1',
          time: '5:00',
          description: 'apply little',
          id: '03531555530327757'
        },
        {
          name: 'mulch',
          location: 'planter 3',
          time: '5:00',
          description: 'apply little',
          id: '5103696418484356'
        }
      ]
    };
  },
  methods: {
    delay() {
      console.log('delayed');
    },
    remove() {
      console.log('deleted');

    },
    more() {
      console.log('in more');

    },
    check() {
      console.log(this.action);
    },
    reload() {
      this.$f7router.refreshPage();
    }
  }
}
</script>
