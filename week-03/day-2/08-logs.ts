'use strict';
const fs = require('fs');
// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.

function uniqueIP(logFile: string): string[] {
  let check: string[] = [];
  fs.readFileSync(logFile)
    .toString()
    .split(' ' + ' ' + ' ')
    .forEach(i => {
      if (check.indexOf(i) < 0 && i.indexOf('e') < 0 && i.indexOf('E') < 0) {
        check.push(i);
      }
    });
  return check;
}

console.log(uniqueIP('log.txt'));

function ratio(logFile: string): number {
  return (fs.readFileSync(logFile).toString().split('GET').length - 1) / (fs.readFileSync(logFile).toString().split('POST').length - 1);
}

console.log(ratio('log.txt'));