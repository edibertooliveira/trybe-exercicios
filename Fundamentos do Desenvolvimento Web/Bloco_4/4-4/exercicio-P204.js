//4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// > Valor esperado no retorno da função: Fernanda.

const arrName = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function maiorNomeCaracteres (array=[]) {
  let maior = array[0].length;
  let name = '';
  let arr = array;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i].length > maior) {
      maior = arr[i].length;
      name = arr[i];
    }
  }
  return name
}

console.log(maiorNomeCaracteres(arrName))