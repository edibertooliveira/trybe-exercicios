const greaterThanTen = require('../src/greaterThanTen');

describe('Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.', () => {
  test('deve retornar um array com [32, 21]', () => {
    const parameter = [4, 10, 32, 9, 21];
    const result = [32, 21];
    expect(greaterThanTen(parameter)).toEqual(result);
  });
});
