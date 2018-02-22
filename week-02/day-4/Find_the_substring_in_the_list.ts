
'use strict';
//  Create a function that takes a string and a list of string as a parameter
//  Returns the index of the string in the list where the first string is part of
//  Only need to find the first occurence and return the index of that
//  Returns `-1` if the string is not part any of the strings in the list
//  Example
console.log(substrlist('ching', ['this', 'is', 'what', 'I\'m', 'searching', 'in']));
//  should print: `4`
console.log(substrlist('not', ['this', 'is', 'what', 'I\'m', 'searching', 'in']));
//  should print: `-1`

function substrlist(check: string, checkInArr: string[]): number {
  let checkBox: boolean = false;
  let output: number = -1;
  checkInArr.forEach((item: string, index: number) => {
    if (!checkBox) {
      if (item.indexOf(check) >= 0) {
        output = index;
        checkBox = true;
      }
    }
  });
  return output;
}