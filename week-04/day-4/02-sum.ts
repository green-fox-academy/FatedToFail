'use strict';

export class Dunno {
  sumEmAll(tempArr: number[]): number {
    let sum: number = 0;
    try {
      tempArr.forEach((e, i) => {
        Number.isInteger(e)
          ? sum += e 
          : console.log(`\r\nError: ${e}, on index: ${i}, is not a number!`); 
      });
      return sum;
    } catch {
      console.log(`\r\nError: the input: ${tempArr}, is not an array!`);
      return sum;
    }
  }
}

export class Dunno {
  sumEmAll(tempArr: number[]): number {
    let sum: number = 0;
    tempArr.forEach(e => sum += e);
    return sum;
  }
}