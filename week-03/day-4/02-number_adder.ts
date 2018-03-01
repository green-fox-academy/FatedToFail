'use strict';
// Write a recursive function that takes one parameter: n and adds numbers from 1 to n.

function numberAdder(n: number): number {
  if (n <= 1) {
    return 1;
  }
  return n + numberAdder(n - 1);
}

console.log(numberAdder(7));