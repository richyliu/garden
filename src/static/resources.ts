import { DateTime } from 'luxon';


export interface Action {
  type: string;
  // id of Location
  location: string;
  // specific point, if no point assume all points in location
  locationPoint?: LocationPoint;
  time: DateTime;
}


export interface Location {
  name: string;
  place: string;
  origin: DateTime;
  points: LocationPoint[];
}

export interface LocationMap {
  [key: string]: Location;
}


export interface LocationPoint {
  position: {
    x: number;
    y: number;
  };
  // id of plant
  plant: string;
}


export interface Plant {
  name: string;
  creation: DateTime;
}

export interface PlantMap {
  [key: string]: Plant;
}
