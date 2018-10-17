import {ObservationType} from './observation-type';

export interface Observation {
  type: ObservationType;
  /**
   * Reference to location point by document id key
   */
  locationPoint: string;
  description: string;
  time: number;
}
