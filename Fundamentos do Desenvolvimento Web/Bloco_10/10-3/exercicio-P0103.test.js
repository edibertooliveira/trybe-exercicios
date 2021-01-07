const random = require('./challenges');
describe('part 03 - setNumberRandom ', () => {
  jest
    .spyOn(random, 'setNumberRandom')
    .mockImplementationOnce((value01, value02, value03) => value01 * value02 * value03)
    .mockImplementationOnce(value01 => value01 * value01);

  test('receba três parâmetros e retorne sua multiplicação', () => {
    expect(random.setNumberRandom(2, 3, 5)).toBe(30);
    expect(random.setNumberRandom).toBeCalledTimes(1);
  });
  test('receba um parâmetro e retorne seu dobro. ', () => {
    expect(random.setNumberRandom(5)).toBe(25);
    expect(random.setNumberRandom).toBeCalledTimes(2);
  });
});
