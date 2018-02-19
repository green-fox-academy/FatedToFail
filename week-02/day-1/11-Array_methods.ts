'use strict'

console.log(['apple', 'pear', 'melon'].indexOf('pear')); // 1

['apple', 'pear', 'melon'].forEach(function(e, i) {
  console.log(e, i);
});


let triples = [1, 2, 3, 4, 5].map(function(e) {
  return e * 3;
});
console.log(triples); /** [3, 6, 9, 12, 15] */


let evens = [1, 2, 3, 4, 5].filter(function(e) {
  return e % 2 == 0;
});
console.log(evens); /** [2, 4] */


let isAllEven = [2, 6, 14, 5, 4].every(function(e) {
  return e % 2 == 0;
});
console.log(isAllEven); /** false */


let isAnyEven = [2, 6, 14, 5, 4].some(function(e) {
  return e % 2 == 0;
});
console.log(isAnyEven); /** true */


let letters = 'apple'.split('');
console.log(letters); /** ['a', 'p', 'p', 'l', 'e'] */
console.log(letters.join('@')); /** Worms in the apple! */