'use strict';
// When saving this quote a disk error has occured. Please fix it.
// Add "always takes longer than" to between the words "It" and "you"

//ver 1.0
let quote: string = 'Hofstadter\'s Law: It you expect, even when you take into account Hofstadter\'s Law.';
quote = quote.replace('you', 'always takes longer than you');
console.log(quote);

//ver 2.0
quote = 'Hofstadter\'s Law: It you expect, even when you take into account Hofstadter\'s Law.';
let sideString: string = '';
quote = sideString.concat(quote.slice(0, quote.indexOf('you')),'always takes longer than ', quote.slice(quote.indexOf('you'), quote.length));
console.log(quote);

