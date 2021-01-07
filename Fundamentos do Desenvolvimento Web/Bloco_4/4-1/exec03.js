/*
Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.
*/

let num01 = 6, num02 = 4, num03 = 3;

function result (a, b, c) {
  if (a > b && a > c) return a;
  else if (b > a && b > c) return b;
  else b;
}

console.log(result(num01, num02, num03))