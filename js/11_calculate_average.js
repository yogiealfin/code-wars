/*
The goal of this challange is to write a function which calculates the average of the numbers in a given list.
Note: Empty arrays should return 0.
*/

function findAverage(array) {
  const len = array.length;
  return len === 0 ? 0 : array.reduce((x, y) => x + y) / len;
}

console.log(findAverage([1, 1, 1])); // => return 1
console.log(findAverage([1, 2, 2, 3])); // => return 2
console.log(findAverage([12, 40, 23])); // => return 25
console.log(findAverage([12, 59, 77, 15])); // => return 40.75
