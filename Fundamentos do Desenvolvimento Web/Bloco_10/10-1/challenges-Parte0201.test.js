const { decode, encode } = require('./challenges');

describe('o Playground functions . Nos exercícios a seguir, você irá trabalhar com os testes para algumas funções que você criou!', () => {
  describe('Para as funções encode crie os seguintes testes', () => {
    test('se encode e uma função', () => {
      expect(typeof encode).toBe('function');
    });
    test('se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
      const params = 'aeiou';
      const output = encode(params);
      const result = '12345';
      expect(output).toBe(result);
    });
    test('se as demais letras/números não são convertidos para cada caso', () => {
      const params = 'beto';
      const output = encode(params);
      const result = 'b2t4';
      expect(output).toBe(result);
    });
    test('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.', () => {
      const params = 'beto';
      const output = encode(params).length;
      const result = 'b2t4'.length;
      expect(output).toBe(result);
    });
  });

  describe('Para as funções decode crie os seguintes testes ', () => {
    test('se decode e uma função', () => {
      expect(typeof decode).toBe('function');
    });
    test('se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
      const params = '12345';
      const output = decode(params);
      const result = 'aeiou';
      expect(output).toBe(result);
    });
    test('se as demais letras/números não são convertidos para cada caso', () => {
      const params = 'b2t4';
      const output = decode(params);
      const result = 'beto';
      expect(output).toBe(result);
    });
    test('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.', () => {
      const params = 'b2t4';
      const output = decode(params).length;
      const result = 'beto'.length;
      expect(output).toBe(result);
    });
  });
});
