<?php

/*
  The purpose of this challenge is to calculate the distance between the pillars provided that the distance between the pillars and the width of the pillars are equal without calculating the width of the first and last pillar. the function created will accept 3 arguments, the number of pillars, the distance and the width of the pillars.
*/

function pillars($numberOfPillars, $dist, $width)
{
  return ($numberOfPillars == 1) ? 0 : ($numberOfPillars - 1) * ($dist * 100) + ($numberOfPillars - 2) * $width;
}

function check($func, $value)
{
  return $func === $value ? "Your answers is Correct" : "The number did not match up";
}

$test = check(pillars(2, 20, 25), 2000);
echo "$test <br>";
