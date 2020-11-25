// Exercicio 2
const assert = require('assert');

const wordLengths = (arr = []) => {
  const newArr = [];
  Object.values(arr).forEach((value) => newArr.push(value.length));
  return newArr;
};

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);
