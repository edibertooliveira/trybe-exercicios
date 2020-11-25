// Exercicio - 4

const assert = require('assert');

const findTheNeedle = (arr = [], str) => {
  let index = -1;
  Object.values(arr).forEach((value, indexValue) => {
    const checked = value === str;
    if (checked) index = indexValue;
  });
  return index;
};

let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);
