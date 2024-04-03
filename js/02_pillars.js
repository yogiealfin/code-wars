/*
The purpose of this challenge is to calculate the distance between the pillars provided that the distance between the pillars and the width of the pillars are equal without calculating the width of the first and last pillar. the function created will accept 3 arguments, the number of pillars, the distance and the width of the pillars.
*/

function pillars(numPill, dist, width) {
  return numPill == 1 ? 0 : (numPill - 1) * (dist * 100) + (numPill - 2) * width;
}

console.log(pillars(2, 20, 25));
