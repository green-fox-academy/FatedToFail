'use strict';
// We have a number of bunnies and each bunny has two big floppy ears.
// We want to compute the total number of ears across all the bunnies recursively (without loops or multiplication).

function bunnyEarCounter(n: number) {
  if (n <= 1) {
    return 2;
  }
  return 2 + bunnyEarCounter(n - 1);
}

console.log(bunnyEarCounter(20));