'use strict';
const fs = require('fs');

// Create a method that decrypts reversed-order.txt

function halfIt(source: string): string {
  let encoder: string [] = fs.readFileSync('asci.txt').toString().split('\r\n');
  return fs.readFileSync(source, 'UTF-8')
    .toString()
    .split('\r\n')
    .map(e => e.split(' ')
      .map(e => e.split('')
        .map(e => encoder[encoder.indexOf(e) - 1]) 
      .join(''))
    .join(' '))
    .join('\r\n');
}

console.log(halfIt('encoded_lines.txt'));