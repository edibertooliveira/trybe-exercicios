const assert = require('assert');

const arrays = [['1', '2', '3'], [true], [4, 5, 6]];

function flatten() {
  const newArr = (acumArr, arr) => acumArr.concat(arr);
  return arrays.reduce(newArr);
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);
