/*
 * Static resources
 */


import {readCollection} from "./database";


/**
 * Action types enum
 * @readonly
 * @enum {string}
 */
const ACTION_TYPES = {
  'WATER': 'Water',
  'PLANT': 'Plant',
  'FERTILIZE': 'Fertilize',
  'MULCH': 'Mulch',
  'HARVEST': 'Harvest',
  'MOVE': 'Move',
  'PRUNE': 'Prune',
  'PESTICIDE': 'Pesticide',
  'OTHER': 'Other'
};

/**
 * Observation types enum
 * @readonly
 * @enum {string}
 */
const OBSERVATION_TYPES = {
  'SPROUT': 'Sprout',
  'EATEN': 'Eaten',
  'DIED': 'Died',
  'OTHER': 'Other'
};

// TODO: make observations tab similar to actions

/**
 * Locations with the key of the firebase key
 * @type {Object}
 */
let LOCATIONS = {};
readCollection('locations', data => {
  LOCATIONS = data;
});



export { ACTION_TYPES, OBSERVATION_TYPES, LOCATIONS };
