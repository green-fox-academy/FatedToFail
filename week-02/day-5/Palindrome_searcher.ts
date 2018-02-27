'use strict'

function paliSearch(str1: string): string[] {
  let outPut: string[] = []; 
  for (let i: number = 1; i < str1.length - 1; i++) {
    let check: boolean = false;
    let counter: number = 1;
    while (!check) {
      if (str1.charAt(i - counter) === str1.charAt(i + counter)) {
        outPut.push(str1.slice(i - counter, i + counter + 1));
        counter += 1;
      } else {
        check = true;
      }
    }
  }
  return outPut;
}

console.log(paliSearch("dog goat dad duck doodle never"));