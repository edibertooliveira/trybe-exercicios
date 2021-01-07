const longestWord = (word) => {
  const entrada = word.split(' ');
  let maxWord = '';
  Object.keys(entrada).forEach((key) => {
    if (entrada[key].length > maxWord.length) maxWord = entrada[key];
  });
  return maxWord;
};
const text = 'Antônio foi no banheiro e não sabemos o que aconteceu';
console.log(longestWord(text)); // eslint-disable-line no-console
