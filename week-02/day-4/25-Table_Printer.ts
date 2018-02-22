'use strict';
// Create a function that prints the ingredient list of dictionaries to the console in the following format:
//
// +--------------------+---------------+----------+
// | Ingredient         | Needs cooling | In stock |
// +--------------------+---------------+----------+
// | vodka              | Yes           | 1        |
// | coffee_liqueur     | Yes           | -        |
// | fresh_cream        | Yes           | 1        |
// | captain_morgan_rum | Yes           | 2        |
// | mint_leaves        | No            | -        |
// +--------------------+---------------+----------+
//
// OPTIONAL
// The frist columns should be automatically as wide as the longest key
let ingredients: any[] = [
  { name: 'vodka', in_stock: 1, needs_cooling: true },
  { name: 'coffee_liqueur', in_stock: 0, needs_cooling: true },
  { name: 'fresh_cream', in_stock: 1, needs_cooling: true },
  { name: 'captain_morgan_rum', in_stock: 2, needs_cooling: true },
  { name: 'mint_leaves', in_stock: 0, needs_cooling: false },
  { name: 'sugar', in_stock: 0, needs_cooling: false },
  { name: 'lime juice', in_stock: 0, needs_cooling: true },
  { name: 'soda', in_stock: 0, needs_cooling: true }
];

let longestIngredient: number = 0;

ingredients.forEach(function (item, index) {
  if (longestIngredient < ingredients[index].name.length) {
    longestIngredient = ingredients[index].name.length; 
  }
});

for (let i: number = 0; i < 4 + ingredients.length; i++) {
  let printOut: string = '';
  for (let j: number = 0; j < 31 + longestIngredient; j++) {
    if (i === 0 || i === 2 || i === 3 + ingredients.length) {
      if (j === 0 || j === longestIngredient + 3 || j === longestIngredient + 19 || j === longestIngredient + 30) {
        printOut += '+';  
      } else {
        printOut += '-'; 
      }   
    } else if (i == 1) {
      if (j === 0 || j === longestIngredient + 3 || j === longestIngredient + 17 || j === longestIngredient + 28) {
        printOut += '|';  
      } else if (j === 2) {
        printOut += ' Ingredients'; 
      } else if (j < longestIngredient + 3 && j >= 13) {
        printOut += ' ';
      } else if (j === longestIngredient + 4) {
        printOut += ' Needs cooling ';
      } else if (j === longestIngredient + 18) {
        printOut += ' In stock ';
      }
    } else {
      if (j === 0 || j === longestIngredient + 3 || j === longestIngredient + 17 || j === longestIngredient + 28) {
        printOut += '|';  
      } else if (j === 1) {
        printOut += ' ' + ingredients[i - 3].name; 
      } else if (j < longestIngredient + 3 && j >= ingredients[i - 3].name.length + 2) {
        printOut += ' ';
      } else if (j === longestIngredient + 4) {
        if (ingredients[i - 3].needs_cooling) {
          printOut += ' Yes           ';
        } else {
          printOut += ' No            ';
        }
      } else if (j === longestIngredient + 18) {
        if (ingredients[i - 3].in_stock !== 0) {
          printOut += ' ' + ingredients[i - 3].in_stock + '        ';
        } else {
          printOut += ' -        ';  
        }
      }
    }
  }
  console.log(printOut);
}
