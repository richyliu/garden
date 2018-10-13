import {Point} from './point';
import {Planted} from './planted';

export interface LocationPoint {
  name?: string;
  /**
   * Location point might be the only one in Location; in which case a "point" would be pointless
   */
  point?: Point;
  plant: Planted;
  /**
   * Reference to location by key
   */
  location: string;
}
