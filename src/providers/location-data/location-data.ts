import { Injectable } from '@angular/core';
import {Location} from '../../static/resources';
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
        origin: DateTime('7/24/18'),
        points: [
          {
            x: 0,
            y: 0
          },
          plant:
        ]
      }
    ]
  }

}
