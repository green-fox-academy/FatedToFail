'use strict';

// Write a function that checks if the array contains "7"
// if it contains return "Hoorray" otherwise return "Noooooo"
const numbers: number[] = [1, 2, 3, 4, 5, 6, 8];
console.log(containsSeven(numbers));
// The output should be: "Noooooo"
// Do this again with a different solution using different list functions!

//ver 1.0
/*function containsSeven (arr: number[]): string {
  let check: number = 0;
  check = arr.join(' ').indexOf(' 7 ');
  if (check == -1) {
    return "Noooooo"
  } else {
  return "Hoorray";
  }
}*/

//ver 2.0
function containsSeven (arr: number[]): string {
  let check: string = 'Noooooo';
  arr.forEach (function (item) {
    if (item == 7) {
      check = 'Hoorray';
    }
  });
  return check;
}
export = containsSeven;