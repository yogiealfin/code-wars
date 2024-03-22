<?php

/*
The goal of this challenge is to write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0
*/

function summation($n)
{
  // Your code here
  return array_sum(range(1, $n));
}

echo summation(3);
echo summation(5);
