const assert = require('assert');

const alex = {
  name: 'Alex',
  age: 26,
  likes: ['fly fishing'],
  nationality: 'Australian',
};

const gunnar = {
  name: 'Gunnar',
  age: 30,
  likes: ['hiking', 'scuba diving', 'taking pictures'],
  nationality: 'Icelandic',
};

// complete a assinatura da função abaixo
const personLikes = obj => {
  const [...rest] = obj.likes;
  return `${obj.name} is ${obj.age} years old and likes ${rest.join(', ')}.`;
};

assert.strictEqual(personLikes(alex), 'Alex is 26 years old and likes fly fishing.');

assert.strictEqual(
  personLikes(gunnar),
  'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.'
);
