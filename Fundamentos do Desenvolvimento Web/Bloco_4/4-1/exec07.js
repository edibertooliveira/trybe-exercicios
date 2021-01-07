/*
Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.
*/

let nota = 85;

function converteNota (nota) {
  let ehNota = nota, result;

  if (ehNota < 0 || ehNota > 100) { 
    result = "Error nota 0 ou maior que 100"
  } else if (ehNota <= 60) {
    result = "F"
  } else if (ehNota <= 70) {
    result = "E"
  } else if (ehNota <= 80) {
    result = "D"
  } else if (ehNota <= 90) {
    result = "C"
  } else if (ehNota < 100) {
    result = "B"
  } else if (ehNota = 100) {
    result = "A"
  }else{
    result = "Reprovado"
  }
  return result;
}

console.log(converteNota(nota));