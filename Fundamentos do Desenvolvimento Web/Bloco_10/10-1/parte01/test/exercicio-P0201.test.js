const addOne = require('../src/addOne');

describe('Escreva a função addOne para passar nos testes já implementados.', () => {
  const myArray = [31, 57, 12, 5];
  const unchanged = [31, 57, 12, 5];
  const expected = [32, 58, 13, 6];
  const output = addOne(myArray);

  test('deve retorna uma função', () => {
    expect(typeof addOne).toBe('function');
  });
  test('deve retorna um array', () => {
    expect(output).toEqual(expected);
    expect(output).not.toBe(unchanged);
  });
});
