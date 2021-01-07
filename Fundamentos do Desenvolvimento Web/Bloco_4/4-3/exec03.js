/*
3 - Agora inverta o lado do triângulo. Por exemplo:
*/
const n = 5;
const simbolo = '*';
let inputLine = '';
let inputPosition = n;
for (let pass = 0; pass < n; pass += 1) {
  for (let index = 0; index <= n; index += 1) {
    if (index < inputPosition) {
      inputLine += ' ';
    } else {
      inputLine += simbolo;
    }
  }
  console.log(inputLine);
  inputLine = '';
  inputPosition -= 1;
}
