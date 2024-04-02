<?php

/*
The goal of this challenge is to build a function with two arguments that will return an array of the first n multiple of x
*/

function countBy($x, $n)
{
  return range($x, $x * $n, $x);
}

print_r(countBy(2, 5));
