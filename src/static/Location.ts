import { DateTime } from 'luxon';

import LocationPoint from "./LocationPoint";


export default interface Location {
  id: number;
  name: string;
  place: string;
  origin: DateTime;
  points: LocationPoint[];
}
