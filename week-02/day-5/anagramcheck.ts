'use strict'

function check (str1: string, str2: string): boolean {
  return str1.split('').sort().join('') === str2.split('').sort().join('');
}
console.log(check('dog', 'god'));