<?php

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
