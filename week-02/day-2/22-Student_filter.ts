'use strict';

let students: any[] = [
  {name: 'Rezso', age: 9.5, candies: 2},
  {name: 'Zsombor', age: 12, candies: 5},
  {name: 'Aurel', age: 7, candies: 3},
  {name: 'Olaf', age: 12, candies: 7},
  {name: 'Gerzson', age: 10, candies: 1},
];

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies
// create a function that takes a list of students and logs: 
//  - how many candies they have on average

function moreThanFour (arr: any[]): string[] {
  let printNames: string[] = [];
  for (let i: number = 0; i < arr.length; i++) {
    if (arr[i].candies > 4) {
      printNames = printNames.concat(arr[i].name);
    }
  }
  return printNames;
}

console.log(moreThanFour(students));

function candiesOwnedPerPerson (arr: any[]): number {
  let countCandies: number = 0;
  for (let i: number = 0; i < arr.length; i++) {
    countCandies += arr[i].candies;
  }
  return countCandies / (arr.length - 1);
}

console.log(candiesOwnedPerPerson(students));

