const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = name =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const animaisFind = Animals.find(value => value.name === name);
      const err = 'Nenhum animal com esse nome!';
      if (animaisFind) return resolve(animaisFind);
      return reject(err);
    }, 100);
  });

const getAnimal = async name => findAnimalByName(name).then(data => data);

// ---------------------

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error => expect(error).toEqual('Nenhum animal com esse nome!'));
    });
  });
});
