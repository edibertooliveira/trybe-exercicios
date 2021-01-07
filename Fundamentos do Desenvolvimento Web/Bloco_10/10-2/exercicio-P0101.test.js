const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};

describe('Escreva um teste que verifique a chamada do callback de uma função uppercase ', () => {
  test('se transforma as letras de uma palavra em letras maiúsculas.', async done => {
    const params = 'patricia';
    function callback(str) {
      expect(str).toBe('PATRICIA');
      done();
    }
    uppercase(params, callback);
  });
});
