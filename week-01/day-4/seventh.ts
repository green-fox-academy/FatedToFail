'use strict';

let number: number = 15;

for (let i: number = 1; i <= 10; i++){
    console.log(`${ i } * ${ number } = ${ number * i}`)
}

// Create a program that
// prints the multiplication table with number
//
// Example:
// The number 15 should print:
//
// 1 * 15 = 15
// 2 * 15 = 30
// 3 * 15 = 45
// 4 * 15 = 60
// 5 * 15 = 75
// 6 * 15 = 90
// 7 * 15 = 105
// 8 * 15 = 120
// 9 * 15 = 135
// 10 * 15 = 150

for(let i: number = 1; i <= 100; i++){
    let fizzBuzz: string = ''
    if(i % 3 === 0){
        fizzBuzz += 'Fizz'
    }
    if (i % 5 === 0){
        fizzBuzz += 'Buzz'
    }
    if (fizzBuzz === ''){
        console.log(i)
    } else {
        console.log(fizzBuzz)
    }
}