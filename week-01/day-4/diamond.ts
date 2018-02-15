'use strict'

let lineCount: number = 11;

for(let i: number = 1; i <= lineCount; i++){
    let printOut: string = '';
    if (i <= lineCount / 2 + 0.5){
    
        for(let j: number = 1; j <= (lineCount / 2 - i + 0.5); j++){
            printOut += ' ';
        }

        for(let k: number = 1; k <= (i * 2) - 1 ; k++){
            printOut += '*';
        }
    } else {

        for(let j: number = 1; j <= ((-1 * (lineCount / 2)) + i); j++){
            printOut += ' ';                    
        }

        for(let k: number = 1; k <= (lineCount * 2 + 1)  - (i * 2) ; k++){
            printOut += '*';
        }
    } 


    console.log(printOut);
}