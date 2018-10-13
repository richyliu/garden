/**
 * Represents a plant that has been planted. There exists a "planted" for every plant in the garden.
 */
import {Plant} from './plant';
import { DateTime } from 'luxon';

export interface Planted {
  plant: Plant;
  creation: DateTime;
}
