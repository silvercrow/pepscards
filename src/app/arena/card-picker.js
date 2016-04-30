import 'babel-polyfill';

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
 * Checks whether exist repeated values in two arrays
 * @param  {Array} array1 : first array to test against
 * @param  {Array} array2 : second array to test against
 * @return {Boolean}
 */
export const checkMutExArray = (array1, array2) => {
  let x, y;
  for (x = )
};
