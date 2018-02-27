'use strict';

// Open a file called 'my-file.txt'
// Write your name in it as a single line
// If the program is unable to write the file,
// then it should print an error message like: 'Unable to write file: my-file.txt'

const fs = require('fs');

try {
  fs.readFileSync('my-file.txt');
  fs.writeFileSync('my-file.txt', 'Roni');
}
catch (err) {
  console.log('Unable to write file');
}