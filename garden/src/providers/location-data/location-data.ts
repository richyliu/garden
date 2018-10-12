import { Injectable } from '@angular/core';
import {DateTime} from 'luxon';

import {LocationMap} from '../../classes/resources';
import {PlantDataProvider} from '../plant-data/plant-data';


@Injectable()
export class LocationDataProvider {

  private locations: LocationMap;

  constructor(private plantDb: PlantDataProvider) {
    this.locations = {
      'aoixen': {
        name: 'Plot 1',
        place: 'by the right side',
        origin: DateTime.fromISO('2018-07-28'),
        points: [
          {
            position: {
              x: 0,
              y: 0
            },
            plant: this.plantDb.plant
          }
        ]
      }
    };
  }

}
