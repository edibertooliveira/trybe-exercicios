const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' },
};

const findUserById = id => {
  return new Promise((resolve, reject) => {
    if (users[id]) {
      return resolve(users[id]);
    }

    return reject({ error: `User with ${id} not found.` });
  });
};

const getUserName = userID => {
  return findUserById(userID).then(user => user.name);
};

describe('Utilizando a sintaxe de Promise , faça um teste que verifique o resultado da função getUserName para o caso em que o usuário é encontrado, e também um teste para o caso em que o usuário não é encontrado.', () => {
  test('se resultado dessa busca é uma Promise, que é utilizada pelo método getUserName.', () => {
    const params01 = 4;
    const params02 = 5;
    const params03 = 3;

    expect(getUserName(params01)).resolves.toBe('Mark');
    expect(getUserName(params02)).resolves.toBe('Paul');
    expect(getUserName(params03)).rejects.toEqual({ error: `User with ${params03} not found.` });
  });
});
