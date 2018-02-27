'use strict'

function palindrome(str1: string): string {
  return str1 + str1.split('').reverse().join('');
}
console.log(palindrome('huhu123'));