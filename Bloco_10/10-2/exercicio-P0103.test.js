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

describe('O código a seguir simula uma chamada ao banco de dados para buscar usuários', () => {
  test('se resultado dessa busca é uma Promise, que é utilizada pelo método getUserName.', async () => {
    const getUserName1 = await getUserName(4);
    const getUserName2 = await getUserName(5);

    expect(getUserName1).toBe('Mark');
    expect(getUserName2).toBe('Paul');
  });

  test('o caso de erro', async () => {
    try {
      await getUserName(1);
    } catch (e) {
      expect(e).toEqual({ error: 'User with 1 not found.' });
    }
  });
});
