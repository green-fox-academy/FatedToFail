'use strict';
// Given base and n that are both 1 or more, compute recursively (no loops)
// the value of base to the n power, so powerN(3, 2) is 9 (3 squared).

function powerN(n: number[]): number {
  if (n[1] <= 1) {
    return n[0]; 
  }
  return n[0] * powerN([n[0], n[1] - 1]);
}

console.log(powerN([4, 3]));