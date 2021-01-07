const random = require('./challenges');

describe('part 02 - setNumberRandom', () => {
  jest.spyOn(random, 'setNumberRandom').mockImplementation((value01, value02) => value01 - value02);
  test('receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez. Faça os testes necessários.', () => {
    expect(random.setNumberRandom(20, 10)).toBe(10);
    expect(random.setNumberRandom).toBeCalledTimes(1);
  });
});
