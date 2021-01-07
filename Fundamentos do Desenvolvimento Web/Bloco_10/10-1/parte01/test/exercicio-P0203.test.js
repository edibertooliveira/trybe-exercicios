const addAllnumbers = require('../src/addAllnumbers');

describe('Escreva a função addAllnumbers para passar nos testes já implementados.', () => {
  const numbers = [9, 23, 10, 3, 8];
  const expected = 53;
  const output = addAllnumbers(numbers);
  test('deve retornar o tipo da função', () => {
    expect(typeof addAllnumbers).toBe('function');
  });
  test('deve retornar o 53', () => {
    expect(output).toBe(expected);
  });
});
