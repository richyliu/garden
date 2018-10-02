import { Injectable } from '@angular/core';

import {DateTime} from 'luxon';

import {Location, LocationMap} from '../../static/resources';
import {PlantDataProvider} from '../plant-data/plant-data';


@Injectable()
export class LocationDataProvider {

  private locations: LocationMap;

  constructor(private plantDb: PlantDataProvider) {
    // this.locations = {
    //   'aoixen': {
    //     name: 'Plot 1',
    //     place: 'by the right side',
    //     origin: DateTime('7/24/18'),
    //     points: [
    //       {
    //         position: {
    //           x: 0,
    //           y: 0
    //         },
    //         plant: 'foobar'
    //       },
    //       {
    //
    //       }
    //     ]
    //   }
    // };
  }

}
