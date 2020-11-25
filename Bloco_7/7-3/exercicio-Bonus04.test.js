const getLargestNumber = (array) => {
  let largestNumber;
  for (let i = 0; i < array.length - 1; i += 1) {
    if (array[i] > array[i + 1]) {
      largestNumber = [array[i]];
    }
  }
  return largestNumber;
};

const parameter = [45, 8, 2, 50, 1, 7, 99];
const result = 99;
