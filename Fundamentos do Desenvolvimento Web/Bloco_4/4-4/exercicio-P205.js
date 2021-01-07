//5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
//> Valor esperado no retorno da função: 2.

let arr = [2, 3, 2, 5, 8, 2, 3];

function repeteInt (array) {
  let arr = array;
  let contadorNumeroRepetido = 0;
  let contadorNumero = 0;
  let index

  for (let valor = 0; valor < arr.length; valor++) {
    for (let acumulado = 0; acumulado < arr.length; acumulado++) {

      if(arr[valor] === arr[acumulado]) {
        contadorNumeroRepetido += 1;
      }
    }

    if ( contadorNumeroRepetido > contadorNumero) {
      contadorNumero = contadorNumeroRepetido
      index = arr[valor]
    }

    contadorNumeroRepetido = 0
  }
  return index

}

console.log(repeteInt(arr))


