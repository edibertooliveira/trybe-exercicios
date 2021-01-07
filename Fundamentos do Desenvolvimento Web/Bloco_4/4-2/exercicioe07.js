//7 - Utilizando for, descubra qual o menor valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//exercicio 7
var lowerValue = numbers[0];
for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] < lowerValue) {
    lowerValue = numbers[i];
  }
}
console.log("exercicio 7: resultado", lowerValue);
