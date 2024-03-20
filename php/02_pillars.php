<?php
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
