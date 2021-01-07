// Exercicio - 3
const assert = require('assert');

const greaterThanTen = (array) => {
  const results = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > 10) {
      results.push(array[i]);
    }
  }
  return results;
};

const parameter = [4, 10, 32, 9, 21];
const result = [32, 21];

const output = greaterThanTen(parameter);
assert.strictEqual(typeof greaterThanTen, 'function');
assert.deepStrictEqual(output, result);
