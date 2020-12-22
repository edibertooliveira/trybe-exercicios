// 3 - Exercicio;

function myRemoveWithoutCopy(arr, item) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }
  return arr;
}
describe('A função myRemoveWithoutCopy(arr, item) recebe um array arr e retorna o próprio array sem o elemento item caso ele exista no array', () => {
  test('se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toBe([1, 2, 4]);
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).not.toBe([1, 2, 3, 4]);
  });
  test('sofreu alterações', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});
