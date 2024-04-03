/*
The goal of this challenge is to write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0
*/

function sum(num) {
  return (num * (num + 1)) / 2;
}

console.log(sum(2));
console.log(sum(5));
