const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
  `${name} is ${value} ${measurementUnit} apart from the Sun`;

const mars = {
  name: 'Mars',
  distanceFromSun: {
    value: 227900000,
    measurementUnit: 'kilometers',
  },
};

const venus = {
  name: 'Venus',
  distanceFromSun: {
    value: 108200000,
    measurementUnit: 'kilometers',
  },
};

const jupiter = {
  name: 'Jupiter',
  distanceFromSun: {
    value: 778500000,
    measurementUnit: 'kilometers',
  },
};

console.log('1: ', planetDistanceFromSun(mars)); // A
setTimeout(() => console.log('3: ', planetDistanceFromSun(venus)), 3000); // B
setTimeout(() => console.log('2: ', planetDistanceFromSun(jupiter)), 2000); // C