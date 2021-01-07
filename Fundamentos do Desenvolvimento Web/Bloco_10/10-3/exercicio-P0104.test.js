const random = require('./challenges');

describe('upperCase', () => {
  jest.spyOn(random, 'upperCase').mockImplementationOnce(str => str.toLowerCase());

  test('deve retornar a string em caixa baixa.', () => {
    expect(random.upperCase('Marulla')).toBe('marulla');
    expect(random.upperCase).toBeCalledTimes(1);
  });
});
describe('firstLetter', () => {
  jest.spyOn(random, 'firstLetter').mockImplementationOnce(str => str[str.length - 1]);

  test('deve retornar a última letra de uma string.', () => {
    expect(random.firstLetter('Nutella')).toBe('a');
    expect(random.firstLetter).toBeCalledTimes(1);
  });
});
describe('concatWord', () => {
  jest
    .spyOn(random, 'concatWord')
    .mockImplementationOnce((str01, str02, str03) => `${str01} ${str02} ${str03}`);

  test('deve receber três strings e concatená-las', () => {
    expect(random.concatWord('fé', 'experança', 'paz')).toBe('fé experança paz');
    expect(random.concatWord).toBeCalledTimes(1);
  });
});
