// Exercicio - 1
const assert = require('assert');

const greetPeople = (people) => {
  const greeting = [];
  Object.values(people).forEach((value) => greeting.push(`Hello ${value}`));
  return greeting;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];
const output = greetPeople(parameter);

assert.strictEqual(typeof greetPeople, 'function');
assert.deepStrictEqual(output, result);
