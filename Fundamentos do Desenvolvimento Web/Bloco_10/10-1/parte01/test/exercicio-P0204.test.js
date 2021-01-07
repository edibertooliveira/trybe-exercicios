const findTheNeedle = require('../src/findTheNeedle');

describe('Escreva a função findTheNeedle para passar nos testes já implementados.', () => {
  test('deve retornar uma função', () => {
    expect(typeof findTheNeedle).toBe('function');
  });
  test('deve retornar o index do parametro passado needle = index 3', () => {
    const words = ['house', 'train', 'slide', 'needle', 'book'];
    const expected = 3;
    const output = findTheNeedle(words, 'needle');
    expect(output).toBe(expected);
  });
  test('deve retornar o index do parametro passado plant = index 0', () => {
    const words = ['plant', 'shelf', 'arrow', 'bird'];
    const expected = 0;
    const output = findTheNeedle(words, 'plant');
    expect(output).toBe(expected);
  });
  test('deve retornar o index do parametro passado plant = index -1', () => {
    const words = ['plant', 'shelf', 'arrow', 'bird'];
    const expected = -1;
    const output = findTheNeedle(words, 'plat');
    expect(output).toBe(expected);
  });
});
