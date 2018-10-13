import { DateTime } from 'luxon';

export interface Plant {
  name: string;
  scientificName: string;
  /**
   * The seeds/plant were acquired on this day
   */
  acquired: DateTime;
}
