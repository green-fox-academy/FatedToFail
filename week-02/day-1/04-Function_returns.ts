'use strict'

function makeGreen(nime: string): string {
    let newName = 'Green ' + nime;
    return newName;
  }
  
function greetByName(sayHello: string, varName: string){
    console.log(sayHello, varName);
} 
  
  let nime = makeGreen('Tojas');
  greetByName('Whazzup', nime);