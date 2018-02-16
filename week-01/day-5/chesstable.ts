'use strict'

let lineCount: number = 8;

for(let i: number = 1; i <= lineCount; i++){
    let printOut: string = '';
    for(let j: number = 1; j <= lineCount; j++){
        if((j + i) % 2 == 1){
            printOut += ' ';
        } else {
            printOut += '%'
        }


    }
    console.log(printOut)
}