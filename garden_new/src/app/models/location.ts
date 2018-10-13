import { DateTime } from 'luxon';
import {Point} from './point';

export interface Location {
  name: string;
  point: Point;
  width: number;
  height: number;
  creation: DateTime;
}
