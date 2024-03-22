<?php

/*
The goal of this challenge is to turn the given number into a negative value. 
Note :
1. The number can be negative already, in which case no change is required.
2. Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.
*/

function returnNegative($num)
{
  return -abs($num);
}

echo returnNegative(4);
