'use strict';
// Given a non-negative int n, return the sum of its digits recursively (no loops). 
// Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while 
// divide (/) by 10 removes the rightmost digit (126 / 10 is 12).

function sumDigits(n: number): number {
  if (n.toString().length <= 1) {
    return n;
  }
  return Math.floor(n % 10) + (sumDigits(Math.floor(n - n % 10) / 10));
}

console.log(sumDigits(11111111111111111));