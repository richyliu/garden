import { Injectable } from '@angular/core';
import { DateTime } from 'luxon';
import {LocationsService} from './locations.service';
import {AngularFirestore} from '@angular/fire/firestore';
import {LocationMap} from '../models/location-map';
import {Location} from '../models/location';

@Injectable({
  providedIn: 'root'
})
export class DataInitService {

  constructor(
    private db: LocationsService,
    private fs: AngularFirestore
  ) { }

  public run() {
    console.log('running DataInit.run()...');

    const locations: LocationMap = {
      [this.fs.createId()]: {
        name: 'Plot 1',
        point: {
          x: 24,
          y: 14
        },
        width: 4,
        height: 4,
        creation: DateTime.fromISO('2018-07-29')
      },
      [this.fs.createId()]: {
        name: 'Plot 2',
        point: {
          x: 24,
          y: 4
        },
        width: 3,
        height: 8,
        creation: DateTime.fromISO('2018-08-04')
      }
    };

    console.log('Generated locations: ', locations);
    console.log('Serialized locations: ', Object.values(locations).map(l => l.serialize()));
    // this.db.getLocations().subscribe(console.log);
    // this.db.collection('locations').add()

    for (const key of Object.keys(locations)) {
      this.fs.collection('locations').doc(key).set(locations[key].serialize());
    }
  }
}
