import { Injectable } from '@angular/core';

import {DateTime} from "luxon";

import {Plant, PlantMap} from "../../static/resources";



@Injectable()
export class PlantDataProvider {

  plants: PlantMap;

  constructor() {
    this.plants = {
      'foobar': {
        name: 'asparagus',
        creation: DateTime.local(2018, 7, 28)
      },
      'xiussr': {
        name: 'beets',
        creation: DateTime.local(2018, 7, 28)
      },
      'esnvxu': {
        name: 'carrot',
        creation: DateTime.local(2018, 7, 28)
      },
    }
  }
}
