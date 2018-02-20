'use strict';

let students: any[] = [
  {name: 'Teodor', age: 3, candies: 2},
  {name: 'Rezso', age: 9.5, candies: 2},
  {name: 'Zsombor', age: 12, candies: 5},
  {name: 'Aurel', age: 7, candies: 3},
  {name: 'Olaf', age: 12, candies: 7},
  {name: 'Gerzson', age: 10, candies: 1},
];

// create a function that takes a list of students and logs: 
// - how many candies are owned by students
// create a function that takes a list of students and logs:
// - Sum of the age of people who have lass than 5 candies

function candiesOwned (arr: any[]): number {
  let countCandies: number = 0;
  for (let i: number = 0; i < arr.length; i++) {
    countCandies += arr[i].candies;
  }
  return countCandies;
}

console.log(candiesOwned(students));

function ageSumByCandy (arr: any[]): number {
  let sumAge: number = 0;
  for (let i: number = 0; i < arr.length; i++) {
    if (arr[i].candies < 5) {
      sumAge += arr[i].age;
    }
  }
  return sumAge;
}

console.log(ageSumByCandy(students));