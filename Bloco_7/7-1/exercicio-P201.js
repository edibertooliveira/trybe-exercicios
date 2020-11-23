const faturial = (num) => {
  let multi = num;
  for (let index = 1; index < num; index += 1) multi *= index;
  return multi;
};

console.log(faturial(4)); // eslint-disable-line no-console
