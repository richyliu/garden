import { Injectable } from '@angular/core';
import {Location} from '../../classes/resources';
import {DateTime} from 'luxon';

/*
  Generated class for the LocationDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LocationDataProvider {

  private locations: Location[];

  constructor() {
    this.locations = [
      {
        id: 1,
        name: 'Plot 1',
        place: 'by the right side',
        origin: DateTime.fromISO('2018-07-28'),
        points: [
          {
            position: {
              x: 0,
              y: 0
            },
            plant: {
              id: 42,
              name: "foo",
              creation: DateTime.fromISO('2018-07-30')
            }
          },
        ]
      }
    ]
  }

}
