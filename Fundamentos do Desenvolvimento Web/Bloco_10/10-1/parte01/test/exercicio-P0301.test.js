const greetPeople = require('../src/greetPeople');

describe('Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.', () => {
  test('deveretornar um array com Hello antes de cada string', () => {
    const parameter = ['Irina', 'Ashleigh', 'Elsa'];
    const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];
    const output = greetPeople(parameter);
    expect(output).toEqual(result);
  });
});
