/* 4 - A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.
Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem:
"valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

const count = numbers.length;
const total = () => {
  let result = 0;
  for (props in numbers) {
    result += numbers[props];
  }
  return result / count;
};

console.log(
  "exercicio 4: resultado",
  total() > 20 ? "valor maior que 20" : "valor menor ou igual 20"
);
