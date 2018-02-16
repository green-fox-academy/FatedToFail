'use strict';
let firstNumber: number = 0;
let secondNumber: number = 0;
let interval: number = 150000;
let sum: number = 0;
let sum2: number = 0;
let count: number = 7;
for (let j: number = 1; j < interval; j++){
    firstNumber = j
    for(let i: number = 1; i < j; i++){
        if((j % i) === 0){
            secondNumber += i;
        }
    }
       
    for(let i: number = 1; i < secondNumber; i++){
        if((secondNumber % i) === 0){
            sum += i;
        }
    }
    if(sum === firstNumber){
        
        sum2 += 1;    
        console.log(`${firstNumber} and ${secondNumber} are friendly numbers`);
        
    }
    firstNumber = 0;
    secondNumber = 0;
    sum = 0;
/*    break(sum2 == count){

    }*/
}
