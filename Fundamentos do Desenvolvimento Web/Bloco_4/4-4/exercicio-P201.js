//1 - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

const string = 'ela'

function palindromo(string){
  
  let str = string, reverse = "";
  for (let index = 1; index <= str.length; index++){
    reverse += str[str.length - index];
  }  
  return reverse === str ? true : false;
}

console.log(palindromo(string));

