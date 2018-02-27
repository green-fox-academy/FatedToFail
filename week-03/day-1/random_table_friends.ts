'use strict'

let myArray: string[][] = [
  ['Margó', 'Peti', 'Dóri', 'Noone'],
  ['Roni', 'Sanyi', 'Bazsi', 'András'],
  ['Sári', 'Balázs', 'Gergő', 'Áron'],
  ['Alpár', 'Szandi', 'Eszter', 'Nobody']
];

function randomOrder(arr: string[][]) {
  let count: number = 0;
  let check: string[] = [];
  
  for (let i: number = 0; i < 4; i++) {
    let current: string[] = [];
    for (let j: number = 0; j < 4; j++) {
      count = Math.floor(Math.random() * 4);
      if (check.indexOf(arr[j][count]) < 0) {
        current.push(arr[j][count]);
        check.push(arr[j][count]);
      } else {
        j -= 1;
      }
    }
    console.log(current);
  }
}

randomOrder(myArray);