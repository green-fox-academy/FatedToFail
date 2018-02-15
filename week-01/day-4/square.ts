'use strict';

let lineCount: number = 6;

for (let i: number = 1; i <= lineCount; i++){
    let printOut: string = '%';
    for (let j: number = 1; j < lineCount; j++){
        if(i == 1 || i == lineCount){
            printOut += '%';
        } else if(j == lineCount - 1) {
            printOut += '%';
        } else {
            printOut += ' ';
        }
        
    }
console.log(printOut)
}