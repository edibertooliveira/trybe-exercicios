//5 - Utilizando for, descubra qual o maior valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let upperValue = 0;
for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] > upperValue) {
    upperValue = numbers[i];
  }
}
console.log("exercicio 5: resultado", upperValue);
