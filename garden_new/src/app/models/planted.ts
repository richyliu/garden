/**
 * Represents a plant that has been planted. There exists a "planted" for every plant in the garden. There is one
 * "planted" for every location
 */

export interface Planted {
  /**
   * Reference to plant by key
   */
  plant: string;
  /**
   * When this plant was planted
   */
  time: number;
}
