'use strict'

function greetByName(name: string, title: string = '') {
    console.log(arguments);
    console.log('Well hi there,', name, title);
  }
  
  greetByName('Tojas');
  greetByName('Barbi', 'CEO');