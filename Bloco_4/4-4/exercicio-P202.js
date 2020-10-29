/* 
2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
Valor esperado no retorno da função: 4.
*/

let chave = [2, 3, 6, 7, 10, 1]

function maiorValorIndice (array=[]) {
  let maior = 0;
  let arr = array;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] > maior) maior = arr[i];
  }
  return arr.indexOf(maior)
}

console.log(maiorValorIndice(chave))


