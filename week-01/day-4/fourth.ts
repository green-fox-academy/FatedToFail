'use strict'

var a: number = 3;
a += 10;
// make it bigger by 10
console.log(a);


let b: number = 100;
b -= -7;
// make it smaller by 7
console.log(b);

let c: number = 44;
c *= 2;
// double c's value
console.log(c);

let d: number = 125;
d /= 5;
// divide d's value by 5
console.log(d);

let e: number = 8;
e **= 2;
// what's the cube of e's value?
console.log(e);

let f1: number = 123;
let f2: number = 345;

console.log(f1 > f2);

// tell if f1 is bigger than f2 (as a boolean)
let g1: number = 350;
let g2: number = 200;
console.log(g1 * 2 > g2);
// tell if the double of g2 is bigger than g1 (pras a boolean)
let h: number = 1357988018575474;
console.log(0 === h % 11);
// tell if h has 11 as a divisor (as a boolean)
let i1: number = 10;
let i2: number = 3;
console.log(i1 > i2 ** 2 && i1 < i2 ** 3);
// tell if i1 is higher than i2 squared and smaller than i2 cubed (as a boolean)
let j: number = 1521;
console.log(0 === j % 3 || 0 === j % 5);
// tell if j is dividable by 3 or 5 (as a boolean)
let k: string = 'Apple';
// fill the k variable with its content 4 times
console.log(k + k + k + k);