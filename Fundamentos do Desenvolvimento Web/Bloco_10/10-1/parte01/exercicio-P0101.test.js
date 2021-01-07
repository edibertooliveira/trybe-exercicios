// 1 - Exercicio

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }
  return a + b;
}

describe('A função sum(a, b) retorna a soma do parâmetro a com o b', () => {
  test('se o retorno de sum é correto', () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(1, 1)).toBe(2);
  });
  test('deve retornar erro ao receber string como parametro.', () => {
    expect(() => sum(4, '5')).toThrow();
    expect(() => sum(4, '5')).toThrow(/parameters must be numbers/);
  });
});
