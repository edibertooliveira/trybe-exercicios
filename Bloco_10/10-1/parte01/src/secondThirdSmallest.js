function secondThirdSmallest(array) {
  let results = [];
  array.sort(function (x, y) {
    return x - y;
  });
  results = [array[1], array[2]];
  return results;
}

module.exports = secondThirdSmallest;
