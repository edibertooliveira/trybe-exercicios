/* 
2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo
 retângulo com 5 asteriscos de base. Por exemplo:
*/
let n = 5;
let padrao = "*";
for (let i = 0; i < n; i++) {
  console.log(padrao);
  for (j = 1; j < i; j++) {
    padrao += "*";
  }
}
