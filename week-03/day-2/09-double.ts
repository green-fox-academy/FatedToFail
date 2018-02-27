'use strict';
const fs = require('fs');

// Create a method that decrypts duplicated-chars.txt

function halfIt(source: string): string {
  return fs.readFileSync(source, 'UTF-8').toString().split('').map((e, i, a) => {
    if (e === a[i+1]) {
      a.splice(i + 1, 1);
    }
    return e; 
  }).join('');
}

console.log(halfIt('double.txt'));
