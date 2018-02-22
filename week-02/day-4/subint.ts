'use strict';
//  Create a function that takes a number and a list of numbers as a parameter
//  Returns the indeces of the numbers in the list where the first number is part of
//  Returns an empty list if the number is not part any of the numbers in the list
// Example

console.log(subint(1, [1, 11, 134, 52, 61]));
// should print: `[0, 1, 4]`
console.log(subint(9, [1, 11, 134, 52, 61]));
// should print: '[]'


// ver 1.0
/* function subint (check: number, arrCheck: number []): number[] {
  let check2: string = check.toString();

  arrCheck = arrCheck.filter(item => check === item % 10 || check === Math.floor(item / 10) % 10 || check === Math.floor(item / 100) % 10);
  return arrCheck;
}
console.log(134 / 100 % 10) */


//ver 2.0
/* function subint(check: number, arrCheck: number []): number[] {
  let output: number[] = [];
  arrCheck.forEach((item: number, index: number) => {
    if (check === item % 10 || check === Math.floor(item / 10) % 10 || check === Math.floor(item / 100) % 10) {
      output.push(index);
    }
  });
  return output;
} */

//ver 2.1
/*function subint (check: number, arrCheck: number []): number[] {
  let output: number[] = [];
  arrCheck.forEach(function (item: number, index: number) {
    if (check === item % 10 || check === Math.floor(item / 10) % 10 || check === Math.floor(item / 100) % 10) {
      output.push(index);
    }
  });
  return output;
} */

//ver 3.0
function subint(check: number, arrCheck: number []): number[] {
  let output: number[] = [];
  arrCheck.forEach((item: number, index: number) => {
    if (-1 !== item.toString().indexOf(check.toString())) {
      output.push(index);
    }
  });
  return output;
}