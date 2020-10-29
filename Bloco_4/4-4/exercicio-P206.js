//6 - Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
// > Valor esperado no retorno da função: 1+2+3+4+5 = 15.

const n = 5;

function somatoria (num) {
  let numerosCalculo = '';
  let resultado = 0;

  for (let index = 1; index < num; index++) {
    numerosCalculo += `${index}+`;
  }
  numerosCalculo += `${num}`;

  for (let index = 1; index <= num; index++) {
    resultado += index;
  }

  return ` ${numerosCalculo} = ${resultado} `;
}

console.log(somatoria(n))