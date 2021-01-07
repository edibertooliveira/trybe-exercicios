const random = require('./challenges');

describe('setNumberRandom', () => {
  jest.spyOn(random, 'setNumberRandom').mockReturnValue(10);
  test('Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada', () => {
    expect(random.setNumberRandom()).toBe(10);
    expect(random.setNumberRandom).toBeCalled();
    expect(random.setNumberRandom).toBeCalledTimes(1);
  });
});
