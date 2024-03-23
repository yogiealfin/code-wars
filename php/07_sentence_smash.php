<?php

/*
The goal of this challenge is to build a function that combine an array of string into one sentence
*/

function smash(array $words)
{
  return join(" ", $words);
}

echo smash(["hello", "world"]);
