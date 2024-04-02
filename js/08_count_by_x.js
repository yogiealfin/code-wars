/*
The goal of this challenge is to build a function with two arguments that will return an array of the first n multiple of x
*/

function countBy(x, n) {
  let z = [];
  let j = x;

  for (let i = 1; i <= n; i++) {
    z.push(x * i);
  }

  return z;
}

const result = countBy(2, 5);
console.log(result);
