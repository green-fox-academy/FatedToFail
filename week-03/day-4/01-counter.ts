'use strict';

// Write a recursive function that takes one parameter: n and counts down from n.

function counter(n: number) {
  if (n <= 1) {
    console.log(n);
    return;
  }
  console.log(n);
  counter(n - 1);
}

counter(11);