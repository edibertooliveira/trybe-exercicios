const wordLengths = require('../src/wordLengths');

describe('Escreva a função wordLengths para passar nos testes já implementados.', () => {
  const words = ['sun', 'potato', 'roundabout', 'pizza'];
  const expected = [3, 6, 10, 5];

  const output = wordLengths(words);

  test('deve retornar o tipo da função', () => {
    expect(typeof wordLengths).toBe('function');
  });
  test('deve retornar o array [3, 6, 10, 5]', () => {
    expect(output).toEqual(expected);
  });
});
