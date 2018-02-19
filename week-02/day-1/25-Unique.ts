'use strict';
//  Create a function that takes a list of numbers as a parameter
//  Returns a list of numbers where every number in the list occurs only once
let array1: number[] = [1, 11, 34, 11, 52, 61, 1, 34];

function unique(arr:number[]):number[] {
  let tempArray: number [] = []
  tempArray = arr.sort(sortNumber);
  for (let i: number = 0; i <= tempArray.length; i++){
    if(tempArray[i] == tempArray[i+1]){
      tempArray.splice(i, 1);
    } 
  }
  function sortNumber(a: number,b: number):number {
    return a - b;
  }
  return tempArray;
}

//  Example
console.log(unique(array1));
//  should print: `[1, 11, 34, 52, 61]`

