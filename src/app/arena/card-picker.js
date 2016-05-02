
/**
 * Returns a random integer between min (included) and max (excluded)
 * Using Math.round() will give you a non-uniform distribution!
 * @param  {Number} min: minimum positive value (included)
 * @param  {Number} max: maximum positive value (excluded)
 * @return {Number}
 */
export const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;

/**
 * @private
 *
 * Generates unique values given a range
 * @param  {Number} count: total of values to generate
 * @param  {Number} min: minimum positive value (included)
 * @param  {Number} max: maximum positive value (excluded)
 * @param  {Array} array: the collection of unique values generated
 */
const generator = (count, min, max, array) => {
  let value;
  while(array.length < count) {
    value = getRandomInt(min, max);
    if (array.indexOf(value) === -1) {
      array.push(value);
    }
  }
};

/**
 * Generates an array of unique values given a range
 * @param  {Number} count: total of values to generate
 * @param  {Number} min: minimum positive value (included)
 * @param  {Number} max: maximum positive value (excluded)
 * @return {Array} the collection of unique values generated
 */
export const getRandomNumbers = (count, min, max) => {
  let uniqueValues = [];
  if (count < 0 || min < 0 || max < 0)
    throw new Error("Parameters must be positive numbers");
  generator(count || 1, min || 0, max || 10, uniqueValues);
  return uniqueValues;
};

/**
 * Flattens an array of arrays into one-dimensional array
 * @param  {Array} arr: the array to be flattened
 * @return {Array}
 */
export const flatten = arr => arr.reduce(
  (flattened, cv) => flattened.concat(Array.isArray(cv) ? flatten(cv) : cv),
  [] // initial value of flattened array
);

/**
 * @private
 *
 * Filters an array according to a range
 * @param  {Number} min: lowest value in the range
 * @param  {Number} max: highest value in the range
 * @return {Array}
 */
const filterCards = function (min, max) {
  // this: the array of cards to filter
  return this.filter((item) => item.power >= min && item.power <= max);
};

// @private
const _RANGE_WEAK = [0, 300];
const _RANGE_MEDIUM = [301, 700];
const _RANGE_STRONG = [709, 9999];

/**
 * Generates the ramdom cards for both players
 * @param  {Array} cards: first array to test against
 * @return {Object}
 */
export const getCardsForPlayers = (cards) => {
  let player = [];
      bot = [];

  // assigns an id to each card
  // cards.forEach((item, index) => item.id = index);

  const weak = filterCards.apply(cards, _RANGE_WEAK);
  const medium = filterCards.apply(cards, _RANGE_MEDIUM);
  const strong = filterCards.apply(cards, _RANGE_STRONG);
  const maxValues = [weak.length, medium.length, strong.length];

  // generate random values for each card mode
  player = player.concat(
    getRandomNumbers(1, 0, maxValues[0]), // weak
    getRandomNumbers(1, 0, maxValues[1]), // medium
    getRandomNumbers(1, 0, maxValues[2])  // strong
  );

  // ensures the range values are not repeated
  player.forEach((value, index) => {
    do {
      bot[index] = getRandomNumbers(1, 0, maxValues[index])[0];
    } while(value === bot[index]);
  });

  // get cards by the generated random index
  return {
    bot: [weak[bot[0]], medium[bot[1]], strong[bot[2]]],
    player: [weak[player[0]], medium[player[1]], strong[player[2]]]
  };
};
