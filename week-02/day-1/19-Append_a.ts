'use strict';
// -  Create an array variable named `nimals`
//    with the following content: `["kuty", "macsk", "cic"]`
// -  Add all elements an `"a"` at the end
let nimals: string[] = ["kuty", "macsk", "cic"];
nimals = nimals.map(function(item: string){
  return item + 'a';
});
console.log(nimals);