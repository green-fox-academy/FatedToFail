'use strict'

let lineCount: number = 5;

for(let i: number = 1; i <= lineCount; i++){
    let printOut: string = '';
    for(let j: number = 1; j <= lineCount - i; j++){
        printOut += ' ';
    }
    for(let k: number = 1; k <= (i * 2) - 1 ; k++){
        printOut += '*';
    }
    console.log(printOut);
}