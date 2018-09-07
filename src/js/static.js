/*
 * Static resources
 */


// Generates a constant Enum of Symbols from a list of names
function Enum(...names) {
  // return object
  let ret = {};
  // check if each name is a string
  names.forEach(a => {
    if (typeof a === 'string') ret[a] = Symbol(a.toLowerCase());
  });

  return Object.freeze(ret);
}


const ACTION_TYPES = {
  'WATER': 'Water',
  'MULCH': 'Mulch',
  'FERTILIZE': 'Fertilize',
  'HARVEST': 'Harvest',
  'PRUNE': 'Prune',
  'PESTICIDE': 'Pesticide',
  'SPROUT': 'Sprout',
  'MOVE': 'Move',
  'PLANT': 'Plant',
  'DIED': 'Died',
  'OBSERVATION': 'Observation',
  'OTHER': 'Other'
};


// Generates a new unique id
function GET_ID() {

}


export { ACTION_TYPES };
