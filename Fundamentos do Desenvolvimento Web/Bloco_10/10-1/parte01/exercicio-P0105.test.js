const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

describe('Compare dois objetos (JSON) para verificar se são idênticos ou não', () => {
  test('se o obj1 é igual ao obj2', () => {
    expect(obj1).toEqual(obj2);
    expect(obj2).not.toBe(obj3);
    expect(obj3).not.toBe(obj1);
  });
});
