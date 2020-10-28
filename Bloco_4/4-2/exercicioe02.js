//2 - Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// exercicio 2
let result = 0;
for (props in numbers) {
  result += numbers[props];
}
console.log("exercicio 2: resultado", result);
