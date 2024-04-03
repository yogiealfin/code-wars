/*
The goal of this challenge is to build a function that returns an array of integers from n to 1
*/
const reverseSeq = (n) => {
  let stack = [];
  let i = n;
  while (i > 0) {
    stack.push(i);
    i--;
  }
  return stack;
};

console.log(reverseSeq(5));
