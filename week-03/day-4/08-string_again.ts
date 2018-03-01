'use strict';

// Given a string, compute recursively a new string where all the 'x' chars have been removed.

function xRemover(str: string): string {
  if (str.indexOf('x') < 0 ) {
    return str;
  }
  let tempIndex: number = str.indexOf('x');
  return `${str.slice(0, tempIndex)}${xRemover(str.slice(tempIndex + 1))}`;
}

console.log(xRemover('hsjxurxisx'));