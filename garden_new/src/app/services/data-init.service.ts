import { Injectable } from '@angular/core';
import { Location } from '../models/location';
import { DateTime } from 'luxon';
import {LocationsService} from './locations.service';

@Injectable({
  providedIn: 'root'
})
export class DataInitService {

  constructor(
    private db: LocationsService
  ) { }

  public run() {
    const locations: Location[] = [
      {
        name: 'Plot 1',
        point: {
          x: 24,
          y: 14
        },
        width: 4,
        height: 4,
        creation: DateTime.fromISO('2018-07-29')
      }
    ];

    console.log('running DataInit.run()...');
    console.log(locations);
    this.db.getLocationPoints();
    // this.db.collection('locations').add()
  }
}
