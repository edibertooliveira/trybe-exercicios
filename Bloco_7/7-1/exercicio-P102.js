let oddsAndEvens = [13, 3, 4, 10, 7, 2];
let oddsAndEvensBonus = [13, 3, 4, 10, 7, 2];

const compare = (a, b) => {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
};

oddsAndEvensBonus = oddsAndEvensBonus.sort(compare);

oddsAndEvens = `[ ${oddsAndEvens[5]}, ${oddsAndEvens[1]}, ${oddsAndEvens[2]}, ${oddsAndEvens[4]}, ${oddsAndEvens[3]}, ${oddsAndEvens[0]}`;

console.log(oddsAndEvens); // eslint-disable-line no-console
console.log(oddsAndEvensBonus); // eslint-disable-line no-console
