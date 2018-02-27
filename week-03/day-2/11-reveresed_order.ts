'use strict';
const fs = require('fs');

// Create a method that decrypts reversed-order.txt

function halfIt(source: string): string {
  return fs.readFileSync(source, 'UTF-8').toString().split('\r\n').reverse().join('\r\n');
}

console.log(halfIt('reveresed_order.txt'));