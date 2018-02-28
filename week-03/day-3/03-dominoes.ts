'use strict';
import {Domino} from "./domino";

function initializeDominoes(): Domino[] {
    let dominoes = [];
    dominoes.push(new Domino(5, 2));
    dominoes.push(new Domino(4, 6));
    dominoes.push(new Domino(1, 5));
    dominoes.push(new Domino(6, 7));
    dominoes.push(new Domino(2 ,4));
    dominoes.push(new Domino(7, 1));
    return dominoes;
}

function print(dominoes: Domino[]) {
  let orderOfDomi: Domino[] = [];
  orderOfDomi.push(dominoes[0]);
  for(let i: number = 0; i < dominoes.length - 1; i++) {
    dominoes.forEach(e => {
      if (orderOfDomi[i].values.toString().charAt(2) === e.values.toString().charAt(0)) {
        orderOfDomi.push(e);
      }
    });
  }
  console.log(orderOfDomi);
}

let dominoes = initializeDominoes();
/** You have the list of Dominoes */
/** Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides */
/** eg: [2, 4], [4, 3], [3, 5] ... */



print(dominoes);