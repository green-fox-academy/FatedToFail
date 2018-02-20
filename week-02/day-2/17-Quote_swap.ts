'use strict';
// Accidentally I messed up this quote from Richard Feynman.
// Two words are out of place
// Your task is to fix it by swapping the right words with code
// Also, log the sentence to the console with spaces in between.
// Create a function called quoteSwap().
let words: string[] = ['What', 'I', 'do', 'create,', 'I', 'cannot', 'not', 'understand.'];
let searchFor: string[] = ['do', 'cannot'];

function quoteSwap (arr: string[], arr2: string[]): string {
  let tempString: string = '';
  let tempIndex: number = 0;
  let check: boolean = false;
  arr.forEach (function (item: string, index: number) {
    for (let i: number = 0; i <= 1; i++){
      if (item === arr2[i] && !check){
        tempString = item;
        tempIndex = index;
        check = true;
      } else if (item === arr2[i] && check) {
        arr.splice(index, 0, tempString);
        arr.splice(tempIndex, 1, arr[index + 1]);
        arr.splice(index + 1, 1);
      }
    }
  })

  return arr.join(' ');
}


console.log(quoteSwap(words, searchFor));
// Expected output: "What I cannot create I do not understand."
export = quoteSwap;