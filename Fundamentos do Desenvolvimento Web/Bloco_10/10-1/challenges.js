const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];

function decode(str) {
  const string = {
    str,
  };
  for (let count = 0; count < str.length; count += 1) {
    string.str = string.str.replace('1', 'a');
    string.str = string.str.replace('2', 'e');
    string.str = string.str.replace('3', 'i');
    string.str = string.str.replace('4', 'o');
    string.str = string.str.replace('5', 'u');
  }
  return string.str;
}

function encode(str) {
  const encodeStr = str.split('');
  for (let i = 0; i < encodeStr.length; i += 1) {
    switch (encodeStr[i]) {
      case 'a':
        encodeStr[i] = '1';
        break;
      case 'e':
        encodeStr[i] = '2';
        break;
      case 'i':
        encodeStr[i] = '3';
        break;
      case 'o':
        encodeStr[i] = '4';
        break;
      case 'u':
        encodeStr[i] = '5';
        break;
      default:
        break;
    }
  }
  return encodeStr.join('');
}

const techList = (arr, str) =>
  arr.length === 0 ? 'Vazio!' : arr.sort().map(value => ({ tech: value, name: str }));

const hydrate = str => {
  let sun = 0;
  str.split(' ').forEach(caracter => {
    if (!Number.isNaN(Number(caracter))) sun += Number(caracter);
  });
  if (sun >= 2) return `${sun} copos de água`;
  return `${sun} copo de água`;
};

const searchEmployee = (id, detail) => {};

module.exports = {
  encode,
  decode,
  techList,
  hydrate,
  searchEmployee,
};
