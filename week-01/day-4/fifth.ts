'use strict'

let a: number = 12.5;
let b: number = 7.73;
let c: number = 9.01;

console.log('Surface Area: ' + 2 * ( a * b + a * c + b * c));
console.log('Volume: ' + a * b * c);

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;
console.log((24 * 60 * 60) - ( currentHours * currentMinutes * currentSeconds));

undefined;
null;
NaN;

null !== undefined;
NaN !== undefined;
null !== NaN;

null == undefined;

typeof undefined; // 'undefined'
typeof null; // 'object'
typeof NaN; // 'number'

let apple;
console.log(apple); // undefined
console.log(apple + 1); // NaN
apple = null;
console.log(apple); // null