/*
The goals of this challange is to create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers. 
*/

function oddOrEven(array) {
  return array.reduce((x, y) => x + y, 0) % 2 === 0 ? "even" : "odd";
}

console.log(oddOrEven([1, 2, 3])); // => even
console.log(oddOrEven([])); // => even
console.log(oddOrEven([1, 1, 2, 3])); // => odd
