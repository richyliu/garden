import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Action } from "../../classes/resources";
import {LocationDataProvider} from '../../providers/location-data/location-data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  actions: Action[];

  constructor(
    public navCtrl: NavController,
    public locationData: LocationDataProvider
  ) {
    // this.actions = [
    //   {
    //     type: 'Water',
    //     time: '2018-09-27T04:52:30.329Z',
    //     location: {
    //
    //     }
    //   }
    // ]
  }

  test() {
    console.log('clicked!');
  }

}
