'use strict';
// Given a string, compute recursively a new string where all the
// adjacent chars are now separated by a '*'.

function starSplitter(str: string): string {
  if (str.length <= 1 ) {
    return str;
  }
  return `${str.slice(0, 1)}*${starSplitter(str.slice(1))}`;
}

console.log(starSplitter('hsjxurxisx'));