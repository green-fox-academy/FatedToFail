'use strict'

// String
let welcome: string = 'Hello, World';
console.log(welcome);

// Boolean
let isAwesome: boolean = true;
console.log(isAwesome);

// Integer
let theMeaningOfLifeAndTheUniverseAndEverything: number = 42;
console.log(theMeaningOfLifeAndTheUniverseAndEverything);

// Floating point number
let pi: number = 3.141592;
console.log(pi);

// Assigning and creating a variable, (define its value)
let number: number = 12;

// Mutate a variable, (redefine its value)
number = 23;

// Any
let dynamic: any = 5;
dynamic = true;
dynamic = 'strange';

let ab: number = 12;
ab = ab + 4;
console.log(ab); // Prints 16

let bc: number = 12;
bc = bc - 4;
console.log(bc); // Prints 8

let ca: number = 12;
ca *= 3;
console.log(ca); // Prints 36

let d: number = 12;
d /= 3;
console.log(d); // Prints 4

let e: number = 12;
e %= 7;
console.log(e); // Prints 5

let f: number = 12;
f++;
console.log(f); // Prints 13

let g: number = 12;
g--;
console.log(g); // Prints 11

let h: number = 10;
console.log(h); // Prints 10
console.log(h++); // Prints 10
console.log(h); // Prints 11

let i: number = 10;
console.log(i); // Prints 10
console.log(++i); // Prints 11
console.log(i); // Prints 11

let favoriteNumber: number = 8
console.log('My favorite number is: ' + favoriteNumber)

let a: number = 123;
let b: number = 526;
let c: number = a;
a = b
b = c

console.log(a);
console.log(b);

let massInKg: number = 81.2;
let heightInM: number = 1.78;

console.log('BMI:', massInKg / (heightInM ** 2));

let myName: string = 'Párniczky Áron';
let myAge: number = 28;
let myHeight: number = 1.81;
let myStatus: boolean = false;

console.log(myName + ' ' + myAge + ' ' + myHeight + ' ' + myStatus)

