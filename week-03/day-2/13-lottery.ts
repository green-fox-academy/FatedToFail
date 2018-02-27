'use strict';

const fs = require('fs');

function analyzeLottery(source: string): void {
  let myArray: string[] = [];
  let myArray2: number[] = [];
  let myArray3: string[] = [];
  let counter: number = 1;
  let current: number = 0;
  fs.readFileSync(source)
    .toString()
    .split('\r\n')
    .map(e => e.split(';')
      .forEach((e, i, a) => {
        if (i > 10) {
          myArray.push(e);
        }
      })
    );
  myArray.sort().forEach((e, i, a) => {
    if (e === a[i + 1]) {
      counter += 1;
    } else {
      myArray2.push(counter);
      counter = 1;
    }
  });
  myArray.forEach((e, i, a) => {
    if (e !== a[i + 1]) {
      myArray3.push(e);
    }
  });
  for(let i: number = 0; i < 5; i++) {
    myArray2.forEach(e => {
      if (e > current) {
        current = e;
      }
    });
    console.log(`${myArray3[myArray2.indexOf(current)]} -> ${current}`);
    myArray3.splice(myArray2.indexOf(current), 1);
    myArray2.splice(myArray2.indexOf(current), 1);
    current = 0;
  }
}

analyzeLottery('lottery.txt');