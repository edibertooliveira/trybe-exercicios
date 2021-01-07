const removeVowels = require('../src/removeVowels');

describe('Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.', () => {
  test('', () => {
    const parameter = 'Dayane';
    const result = 'D1y2n3';
    const output = removeVowels(parameter);
    expect(output).toBe(result);
  });
});
