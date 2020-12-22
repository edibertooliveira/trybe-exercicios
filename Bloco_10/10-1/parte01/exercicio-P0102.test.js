function myRemove(arr, item) {
  const newArr = [];
  arr.forEach(value => {
    if (item !== value) {
      newArr.push(value);
    }
  });
  return newArr;
}
describe('A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array', () => {
  test('se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(myRemove([1, 2, 3, 4], 3)).not.toBe([1, 2, 4]);
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
  test('sofreu alterações', () => {
    expect(myRemove([1, 2, 3, 4], 0)).toEqual([1, 2, 3, 4]);
  });
});
