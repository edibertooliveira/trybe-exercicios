/*
Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.
Bonus: use somente um if.
*/

let primeira = 10;
let segunda = 10;
let terceira = 10;

function ehPar(primeira, segunda, terceira) { 
  let result = primeira % 2 == 1 || segunda % 2 == 1 || terceira % 2 == 1 ;
  return result
}

console.log(ehPar(primeira, segunda, terceira));