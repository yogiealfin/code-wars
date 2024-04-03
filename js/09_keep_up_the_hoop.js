/*
The goal of this challange is to write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message
Note :
If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
If he doesn't get 10 hoops, return the string "Keep at it until you get it".
*/

function hoopCount(n) {
  return n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it";
}

console.log(hoopCount(10));
console.log(hoopCount(11));
console.log(hoopCount(8));
