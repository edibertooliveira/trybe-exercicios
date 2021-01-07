/* 
Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.
Bonus: use somente um if.
*/

let primeira = 11;
let segunda = 10;
let terceira = 11;

function ehPar(primeira, segunda, terceira) { 
  let result = primeira % 2 == 0 || segunda % 2 == 0 || terceira % 2 == 0 ;
  return result
}

console.log(ehPar(primeira, segunda, terceira));