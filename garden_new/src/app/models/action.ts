import {LocationPoint} from './location-point';
import {ActionType} from './action-type.enum';

export interface Action {
  type: ActionType;
  locationPoint: LocationPoint;
  description: string;
}
