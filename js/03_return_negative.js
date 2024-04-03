/*
The goal of this challenge is to turn the given number into a negative value. 
Note : 
1. The number can be negativealready, in which case no change is required. 
2. Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.
*/

function makeNegative(num) {
  return -Math.abs(num); // => Math.abs() is a function that make number become absolute (no minus number)
}

console.log(makeNegative(-4.2)); // will return -4.2
console.log(makeNegative(0)); // will return 0
console.log(makeNegative(9)); // will return -9
