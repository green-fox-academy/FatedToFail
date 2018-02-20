
'use strict';



let shopItems: any[] = ['Cupcake', 2, 'Brownie', false];

// Accidentally we added "2" and "false" to the array.
// Your task is to change from "2" to "Croissant" and change from "false" to "Ice cream"
// No, don't just remove the items :)
// Create a function called sweets() which takes the list as a parameter.
// Expected output: "Cupcake", "Croissant", "Brownie", "Ice cream"
function sweets(arr: any[]):string[]{
  return arr = arr.map(function(item: any){
    if(item == 2){
      item = "Croissant";
    } else if(item == false){
      item = "Ice cream";
    } else {
    
    }
    return item;
  })
}

console.log(sweets(shopItems));

export = sweets;

