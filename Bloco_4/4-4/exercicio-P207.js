/* 
7 - Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.

Valor de teste:

```
"trybe" e "be"
```

Valor esperado no retorno da função:

*/

function verificaFimPalavra(word, ending) {
  let ultimaLetras = word[word.length - 2] + word[word.length - 1];
  let letrasProp = ending;

  return ultimaLetras == letrasProp ? true : false;
}
console.log(verificaFimPalavra("trybe", "be"));
console.log(verificaFimPalavra("joaofernando", "fernan"));
