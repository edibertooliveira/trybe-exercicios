/*
Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
*/
let num01 = 5;
let num02 = -5;

const result = (a)=> {
  if (a > 0) return "Positivo";
  if (a < -0) return "Negativo";
}

console.log(result(num01));
console.log(result(num02));