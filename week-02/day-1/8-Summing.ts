'use strict';

// -  Write a function called `sum` that sum all the numbers until the given parameter
// -  The function should return the result

let parameter: number = 3;

function sum(forFor: number): number{
  let sum: number = 0
  for(let i = 1; i <= forFor; i++){
    sum += i
  }
  return sum;
}

console.log(sum(parameter));