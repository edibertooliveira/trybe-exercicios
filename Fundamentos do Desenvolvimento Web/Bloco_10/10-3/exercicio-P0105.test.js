const random = require('./challenges');

describe('upperCase', () => {
  jest
    .spyOn(random, 'upperCase')
    .mockImplementationOnce(str => str.toLowerCase())
    .mockClear();

  test('deve retornar a string em caixa baixa.', () => {
    expect(random.upperCase('Marulla')).toBe('marulla');
    expect(random.upperCase).toBeCalledTimes(1);
  });

  test('deve receber uma string  em caixa alta.', () => {
    expect(random.upperCase('Marulla')).toBe('MARULLA');
    expect(random.upperCase).toBeCalledTimes(2);
  });
});

describe('firstLetter', () => {
  jest
    .spyOn(random, 'firstLetter')
    .mockImplementationOnce(str => str[str.length - 1])
    .mockClear();

  test('deve retornar a última letra de uma string.', () => {
    expect(random.firstLetter('Nutella')).toBe('a');
    expect(random.firstLetter).toBeCalledTimes(1);
  });
  test('retornar só a primeira letra.', () => {
    expect(random.firstLetter('Nutella')).toBe('N');
    expect(random.firstLetter).toBeCalledTimes(2);
  });
});
describe('concatWord', () => {
  jest
    .spyOn(random, 'concatWord')
    .mockImplementationOnce((str01, str02, str03) => `${str01} ${str02} ${str03}`)
    .mockClear();

  test('deve receber três strings e concatená-las', () => {
    expect(random.concatWord('fé', 'experança', 'paz')).toBe('fé experança paz');
    expect(random.concatWord).toBeCalledTimes(1);
  });
  test('deve receber duas strings e concatená-las', () => {
    expect(random.concatWord('fé', 'experança')).toBe('fé experança');
    expect(random.concatWord).toBeCalledTimes(2);
  });
});
