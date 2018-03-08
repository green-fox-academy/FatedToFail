'use strict';

export function countLetters(tempStr: string): object {
  try {
    let tempObj: object = {};
    tempStr.split('').forEach(e => {
      tempObj[e] === undefined 
        ? tempObj[e] = 1
        : tempObj[e]++
    });
    return tempObj;
  } catch {
    return {};
  }
}
