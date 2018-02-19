'use strict';
// -  Create an array variable named `names` with the following content: `['Gin', 'Whiskey', 'Wine', 'Beer']`
// -  Double all the strings in the array, use a built in array method instead of a loop
// It should print: ['GinGin', 'WhiskeyWhiskey', 'WineWine', 'BeerBeer']`
let names: string[] = ['Gin', 'Whiskey', 'Wine', 'Beer'];
names.forEach(function (item: string){
  item = item + item
  console.log(item);
});
