'use strict';
// Write a function that joins two array by matching one girl with one boy in a new array
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]
let girls: string[] = ['Eve', 'Ashley', 'Bözsi', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Béla', 'Todd', 'Neef', 'Jeff'];

console.log(makingMatches(girls, boys));

function makingMatches(arr1: string[], arr2: string[]): string[]{
  let newArr: string[] = [];
  for(let i: number = 0; i < arr2.length; i++ ){
    newArr = newArr.concat(arr1[i] ,arr2[i]); 
  }
  return newArr
}

export = makingMatches;


