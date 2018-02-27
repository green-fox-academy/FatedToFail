'use strict';
const fs = require('fs');

// Create a method that decrypts reversed-lines.txt

function halfIt(source: string): string {
  return fs.readFileSync(source, 'UTF-8').toString().split('\r\n').map((e, i, a) => e.split('').reverse().join('')).join('\r\n');
}

console.log(halfIt('reverse.txt'));