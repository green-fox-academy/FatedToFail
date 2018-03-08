'use strict';

export class Dunno {
  sumEmAll(tempArr: any[]): number {
    let sum: number = 0;
    tempArr.forEach(e => {
      if (isNaN(e)) {
        sum += 0;
      } else { 
        sum += e;
      }
    });
    return sum;
  }
}