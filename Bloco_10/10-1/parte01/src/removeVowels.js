const removeVowels = word => {
  const characters = word.split('');
  let count = 0;
  let results = '';

  characters.forEach((_, index) => {
    if (
      characters[index] === 'a' ||
      characters[index] === 'o' ||
      characters[index] === 'i' ||
      characters[index] === 'e' ||
      characters[index] === 'u'
    ) {
      count += 1;
      results += count;
    } else {
      results += characters[index];
    }
  });
  return results;
};

removeVowels('beto');

module.exports = removeVowels;
