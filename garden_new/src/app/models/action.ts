import {ActionType} from './action-type.enum';

export interface Action {
  type: ActionType;
  /**
   * Reference to location point by document id key
   */
  locationPoint: string;
  description: string;
  time: number;
}
