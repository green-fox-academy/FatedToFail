'use strict';

// -  Create a function called `factorio`
//    that returns it's input's factorial

let parameter: number = 5;

function sum(forFor: number): number{
  let sum: number = 1;
  for(let i = 1; i <= forFor; i++){
    sum *= i;
  }
  return sum;
}

console.log(sum(parameter));