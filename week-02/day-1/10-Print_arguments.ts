'use strict'

// -  Create a function called `printer`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)

function printer(nam1: string, ...restOfNames: string[]){
  let separator: string = ' ';
  console.log(nam1, restOfNames.join(separator));
}

printer('ayy', 'ahoy', 'ehey',' allo', 'illya' );