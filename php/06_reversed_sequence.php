<?php

/*
The goal of this challenge is to build a function that returns an array of integers from n to 1
*/

function reverse_seq($n)
{
  return range($n, 1);
}

print_r(reverse_seq(5));
