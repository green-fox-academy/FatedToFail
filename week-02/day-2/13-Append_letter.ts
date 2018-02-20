'use strict';
// Create a function called "appendA()" that adds "a" to every string in the far list.
// The parameter should be a list.
let far: string[] = ['kuty', 'macsk', 'kacs', 'rók', 'halacsk'];

console.log(appendA(far));

function appendA(arr: string[]):string[]{
  return arr = arr.map(function(item){
    return item + 'a';
  })
}

// The output should be: 'kutya', 'macska', 'kacsa', 'róka', 'halacska'
export = appendA;