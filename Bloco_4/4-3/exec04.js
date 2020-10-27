/* 
4 - Depois, faça uma pirâmide com n asteriscos de base:
*/

let n = 5;
let lineIndex;
let lineColumn;
let lineInput = "";
let symbol = "*";

let midOfMatrix = (n + 1) / 2;
let controlLeft = midOfMatrix;
let controlRight = midOfMatrix;

for (lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1) {
  for (lineColumn = 1; lineColumn <= n; lineColumn += 1) {
    if (lineColumn > controlRight && lineColumn < controlLeft) {
      lineInput = lineInput + symbol;
    } else {
      lineInput = lineInput + " ";
    }
  }
  console.log(lineInput);
  lineInput = "";
  controlRight -= 1;
  controlLeft += 1;
}
