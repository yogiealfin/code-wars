/*
The goal of this challange is to write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer.
*/

function cockroachSpeed(s) {
  const sec = 3600;
  const m = s * 100000;

  return Math.floor(m / sec);
}

console.log(cockroachSpeed(60));
