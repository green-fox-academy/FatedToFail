'use strict';
// -  Create a variable named `numList`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements in `numList`
// 	   -  do it with the built in method
//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numList`
let numList: number[] = [3, 4, 5, 6, 7];
numList.reverse();
console.log(numList);
function reverseIt(getArray: number[]):number[]{
  let temporaryArray: number[] = [];
  for(let i = getArray.length -1; i >= 0; i--){
    let temporaryIndex: number = getArray.length - 1 - i
    temporaryArray[temporaryIndex] = getArray[i];
  }
  return temporaryArray;
}
console.log(reverseIt(numList));