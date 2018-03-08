'use strict';

export class Dunno {
  sumEmAll(tempArr: number[]): number {
    let sum: number = 0;
    tempArr.forEach(e => {sum += e;})
    return sum;
  }
}