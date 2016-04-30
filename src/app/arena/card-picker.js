
/**
 * Returns a random integer between min (included) and max (excluded)
 * Using Math.round() will give you a non-uniform distribution!
 * @param  {Number} min: minimum positive value (included)
 * @param  {Number} max: maximum positive value (excluded)
 * @return {Number}
 */
export const getRandomInt = (min, max) => {
  Math.floor(Math.random() * (max - min)) + min;
}

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
 * @private
 *
 * Filters an array according to a range
 * @param  {Number} min   : lowest value in the range
 * @param  {Number} max   : highest value in the range
 * @return {Array}
 */
const filterCards = funtion (min, max) {
  // this: the array of cards to filter
  return this.filter((item) => item.power >= min && item.power <= max);
};

// @pivate
const _RANGE_WEAK = [0, 300];
const _RANGE_MEDIUM = [301, 700];
const _RANGE_STRONG = [709, 9999];

/**
 * Generates the ramdom cards for both players
 * @param  {Array} cards : first array to test against
 * @return {Object}
 */
export const getCardsForPlayers = (cards) => {
  let pc = [],
      player = [];

  cards.forEach((item, index) => item.id = index);

  const weak = filterCards.apply(cards, _RANGE_WEAK);
  const medium = filterCards.apply(cards, _RANGE_MEDIUM);
  const strong = filterCards.apply(cards, _RANGE_STRONG);

  pc = pc.concat(
    weak[getRandomNumbers(1, 0, weak.length)],
    medium[getRandomNumbers(1, 0, medium.length)],
    strong[getRandomNumbers(1, 0, strong.length)]
  );

  player = player.concat(
    weak[getRandomNumbers(1, 0, weak.length)],
    medium[getRandomNumbers(1, 0, medium.length)],
    strong[getRandomNumbers(1, 0, strong.length)]
  );
/*
  // ensures mutually exclude values in both arrays
  player.forEach(item => {
    let index = pc.indexOf(item);
    if (index >= 0) {
      pc[index]
    }
  });
*/
  return {
    pc,
    player
  };
};
