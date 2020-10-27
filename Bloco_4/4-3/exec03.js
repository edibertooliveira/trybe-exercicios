/* 
3 - Agora inverta o lado do triângulo. Por exemplo:
*/
let n = 5;
let simbolo = "*";
let inputLine = "";
let inputPosition = n;
for (i = 0; i < n; i += 1) {
  for (j = 0; j <= n; j += 1) {
    if (j < inputPosition) {
      inputLine = inputLine + " ";
    } else {
      inputLine = inputLine + simbolo;
    }
  }
  console.log(inputLine);
  inputLine = "";
  inputPosition = inputPosition - 1;
}
