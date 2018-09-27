import { DateTime } from 'luxon';

import LocationPoint from './LocationPoint';


export default interface Action {
  type: string;
  location: Location | LocationPoint;
  time: DateTime;
}
