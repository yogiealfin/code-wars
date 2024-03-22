<?php

/*
The goals of this challange is to create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
*/

function even_or_odd($n)
{
  if ($n % 2 == 0) {
    $answer = "Even";
  } else {
    $answer = "Odd";
  }
  return $answer;
}

$test = even_or_odd(8);
echo $test;
