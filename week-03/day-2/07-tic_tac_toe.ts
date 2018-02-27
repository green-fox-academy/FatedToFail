'use strict';
const fs = require('fs');
// Write a function that takes a filename as string,
// open and read it. The file data represents a tic-tac-toe
// game result. Return 'X'/'O'/'draw' based on which player
// has winning situation.
console.log(ticTacResult('win-o.txt'))
// should print O
console.log(ticTacResult('win-x.txt'))
// should print X
console.log(ticTacResult('draw.txt'))
// should print draw


function ticTacResult(aPath: string): string {
  let checkIt: string[] = [];
  fs.readFileSync(aPath, 'utf-8')
    .split('')
    .forEach(e => {
      if (e === 'O' || e === 'X' || e === ' ') {
        checkIt.push(e);
      }
    });
  let outPut: string = 'draw';
  for (let i: number = 1; i < 4; i++) {
    if (checkIt[i * 3 - 3] + checkIt[i * 3 - 3] === checkIt[i * 3 - 2] + checkIt[i * 3 - 1]) {
      outPut = checkIt[i * 3 - 3];
    } else if (checkIt[i - 1] + checkIt[i - 1] === checkIt[i + 2] + checkIt[i + 5]) {
      outPut = checkIt[i - 1];
    }
  }
  if (checkIt[0] + checkIt[4] === checkIt[8] + checkIt[8] || checkIt[2] + checkIt[4] === checkIt[6] + checkIt[6]) {
    outPut = checkIt[4];
  }
  return outPut;
}