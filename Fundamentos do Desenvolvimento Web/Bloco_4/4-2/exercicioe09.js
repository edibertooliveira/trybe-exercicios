//9 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let array = [];
for (i = 0; i < 25; i++) array.push(i + 1);

let array02 = [];
for (i = 0; i < array.length; i++) array02.push(array[i] / 2);

console.log("exercicio 9: resultado", array02);
