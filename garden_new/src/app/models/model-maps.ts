import {Location} from './location';
import {LocationPoint} from './location-point';
import {Plant} from './plant';

export interface LocationMap extends StringMap<Location> {}

export interface LocationPointMap extends StringMap<LocationPoint> {}

export interface PlantMap extends StringMap<Plant> {}


export interface StringMap<T> {
  [key: string]: T;
}

export interface NumberMap<T> {
  [key: number]: T;
}
