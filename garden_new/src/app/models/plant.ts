/**
 * Plants in the plant catalog. There is only one "plant" for each species/cultivar
 */

export interface Plant {
  name: string;
  scientificName: string;
  /**
   * The seeds/plant were acquired on this day
   */
  acquired: number;
}
