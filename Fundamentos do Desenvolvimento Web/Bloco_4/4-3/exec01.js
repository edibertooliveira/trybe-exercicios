/* 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1,
imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo: */
const n = 5;
let padrao = '';
for (let i = 0; i < n; i += 1) {
  padrao += '*';
}
console.log(padrao);
for (let i = 0; i < n; i += 1) {
  console.log(padrao);
}
