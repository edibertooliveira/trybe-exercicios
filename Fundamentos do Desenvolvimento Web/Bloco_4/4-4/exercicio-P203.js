//3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

//> Valor esperado no retorno da função: 6.

let arr = [2, 4, 6, 7, 10, 0, -3];

function menorValorIndice (array=[]) {
  let menor = array[0];
  let arr = array;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] < menor) menor = arr[i];
  }
  return arr.indexOf(menor)
}

console.log(menorValorIndice(arr))