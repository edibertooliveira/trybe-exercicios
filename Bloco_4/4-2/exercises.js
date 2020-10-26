/*
1 - Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();
2 - Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado;
3 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
4 - A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.
Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
5 - Utilizando for, descubra qual o maior valor contido no array e imprima-o;
6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
7 - Utilizando for, descubra qual o menor valor contido no array e imprima-o;
8 - Utilizando for, crie uma array que vá de 1 até 25 e imprima o resultado;
9 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// exercicio 1
for (number of numbers) console.log('exercicio 1: resultado', number); 

// exercicio 2
let result = 0;
for ( props in numbers) {
  result += numbers[props]
}
console.log('exercicio 2: resultado', result);


// exercicio 3
const count = numbers.length;
const total = ()=> {
  let result = 0;
  for ( props in numbers) {
  result += numbers[props]
  }
  return result / count
}
console.log('exercicio 3: resultado', total());


// exercicio 4
console.log('exercicio 4: resultado', total() > 20 ? "valor maior que 20" : "valor menor ou igual 20");

// exercicio 5
let upperValue = 0;
for (var i = 0; i < numbers.length; i++) {
  if ( numbers[i] > upperValue ) {
      upperValue = numbers[i];
  }
}
console.log('exercicio 5: resultado', upperValue);

// exercicio 6
let qntImpar = 0;
for ( i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2  > 0) qntImpar += 1
}
console.log('exercicio 6: resultado', qntImpar);

//exercicio 7
var lowerValue = numbers[0];
for (var i = 0; i < numbers.length; i++) {
  if ( numbers[i] < lowerValue ) {
      lowerValue = numbers[i];
  }
}
console.log('exercicio 7: resultado', lowerValue);

//exercicio 8
let array = [];
for (i = 0; i < 25; i++) array.push(i+1)

console.log('exercicio 8: resultado', array);

//exercicio 9
let array02 = [];
for (i = 0; i < array.length; i++) array02.push(array[i]/2)

console.log('exercicio 9: resultado', array02);
