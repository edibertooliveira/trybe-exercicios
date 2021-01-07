//3 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

const count = numbers.length;
const total = () => {
  let result = 0;
  for (props in numbers) {
    result += numbers[props];
  }
  return result / count;
};
console.log("exercicio 3: resultado", total());
