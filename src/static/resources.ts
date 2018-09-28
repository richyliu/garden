import { DateTime } from 'luxon';

import LocationPoint from './LocationPoint';
import Plant from "./Plant";


export interface Action {
  type: string;
  // id of Location
  location: number;
  // specific point, if no point assume all points in location
  locationPoint?: LocationPoint;
  time: DateTime;
}


export interface Location {
  id: number;
  name: string;
  place: string;
  origin: DateTime;
  points: LocationPoint[];
}


export interface LocationPoint {
  position: {
    x: number;
    y: number;
  };
  plant: Plant;
}


export interface Plant {
  id: number;
  name: string;
  creation: DateTime;
}
