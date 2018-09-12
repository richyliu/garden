/*
 * Static resources
 */


import {readCollection} from "./database";


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

const OBSERVATION_TYPES = {
  'SPROUT': 'Sprout',
  'EATEN': 'Eaten',
  'DIED': 'Died',
  'OTHER': 'Other'
};

// TODO: make observations tab similar to actions


let LOCATIONS = {};
readCollection('locations', data => {
  LOCATIONS = data;
});



export { ACTION_TYPES, OBSERVATION_TYPES, LOCATIONS };
