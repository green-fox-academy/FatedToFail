'use strict';
// Given a string, compute recursively (no loops) a new string where all the
// lowercase 'x' chars have been changed to 'y' chars.

function xToYConverter(str: string): string {
  if (str.indexOf('x') < 0 ) {
    return str;
  }
  let tempIndex: number = str.indexOf('x');
  return `${str.slice(0, tempIndex)}y${xToYConverter(str.slice(tempIndex + 1))}`;
}

console.log(xToYConverter('hsjxurxisx'));