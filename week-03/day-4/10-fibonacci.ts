'use strict';
// The fibonacci sequence is a famous bit of mathematics, and it happens to
// have a recursive definition. The first two values in the sequence are
// 0 and 1 (essentially 2 base cases). Each subsequent value is the sum of the
// previous two values, so the whole sequence is: 0, 1, 1, 2, 3, 5, 8, 13, 21
// and so on. Define a recursive fibonacci(n) method that returns the nth
// fibonacci number, with n=0 representing the start of the sequence.
let count: number = 0;
let fibArr: number[] = [0, 1];

function fibonacci(n: number, fib: number[]): number {
  if (n <= 0) {
    return count % 2 === 0
      ? fib[0]
      : fib[1];
  }
  if (count % 2 === 0) {
    fib[0] += fib[1];
  } else {
    fib[1] += fib[0];
  }
  count += 1;
  return fibonacci(n - 1, fib);
}
console.log(fibonacci(10, fibArr));