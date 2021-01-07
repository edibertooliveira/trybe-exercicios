const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByAge = age => {
  return new Promise((response, reject) => {
    setTimeout(() => {
      const animalsFind = Animals.filter(value => value.age === age);
      if (animalsFind.length !== 0) return response(animalsFind);
      return reject('Nenhum animal com essa idade!');
    }, 100);
  });
};

const getAnimal = async age => findAnimalByAge(age).then(data => data);

describe('Testando promise - findAnimalByAge', () => {
  describe('Quando existe o animal com a idade procurada', () => {
    test('Retorne um array de objeto dos animals', () => {
      expect.assertions(1);
      return getAnimal(1).then(animal => {
        expect(animal).toEqual([{ name: 'Dorminhoco', age: 1, type: 'Dog' }]);
      });
    });
  });

  describe('Quando não existe o animal com a idade procurada', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal(3).catch(error => expect(error).toEqual('Nenhum animal com essa idade!'));
    });
  });
});
