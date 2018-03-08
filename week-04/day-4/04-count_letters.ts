'use strict';

function countLetters(tempStr: string): object {
  let tempObj: object = {};
  tempStr.split('').forEach(e => {
    tempObj[e] === undefined 
      ? tempObj[e] = 1
      : tempObj[e]++
  });
  return tempObj;
}

