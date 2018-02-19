'use strict';
//define the variables
let firstNumber: number = 0;
let secondNumber: number = 0;
let interval: number = 10000;
let sum: number = 0;

//the cicle checking from 1 to interval if there's a friendly number pair
for (let j: number = 1; j < interval; j++){
    
    firstNumber = j
    
    //getting it's "friendly value"
    for(let i: number = 1; i < j; i++){
        
        if((j % i) === 0){
           
            secondNumber += i;
        }
    }
    
    //checking the j's -"friendly value"-'s "friendly value"
    for(let i: number = 1; i < secondNumber; i++){
        
        if((secondNumber % i) === 0){
           
            sum += i;
        }
    }
    
    //if they're a friendly pair they gonna be displayed
    if(sum === firstNumber){ 
        
        console.log(`${firstNumber} and ${secondNumber} are friendly numbers`);
        
    }
    
    //resetting the values
    firstNumber = 0;
    secondNumber = 0;
    sum = 0;
}
let fArray: number [] = [1, 2, 3, 4, 5];
fArray.splice()