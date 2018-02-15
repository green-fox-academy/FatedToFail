'use strict'

let lineCount: number = 5;

for(let i: number = 1; i <= lineCount; i++){
    let printOut: string = ''
    for(let j: number = 1; j <= i; j++){
        printOut += '*'
    }
    console.log(printOut)
}