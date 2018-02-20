'use strict';
// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!
let reversed: string = '.eslaf eb t\'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI';
console.log(reverse(reversed));

function reverse(getString: string): string{
  let tempArr: string[] = [];
  tempArr = getString.split('');
  tempArr = tempArr.reverse();
  return tempArr.join('');
}

export = reversed;