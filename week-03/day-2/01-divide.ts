'use strict';
// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0
function divide (num: number) {
  if (num === 0) {
    return 'fail';
  } else {
    return 10 / num;
  }
}
console.log(divide(20));
