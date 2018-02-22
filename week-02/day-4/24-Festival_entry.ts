'use strict';

let watchlist: string[] = [];

let securityAlcoholLoot: number = 0;

const queue: any[] = [
  { name: 'Amanda', alcohol: 10, guns: 1 },
  { name: 'Tibi', alcohol: 0, guns: 0 },
  { name: 'Dolores', alcohol: 0, guns: 1 },
  { name: 'Wade', alcohol: 1, guns: 1 },
  { name: 'Anna', alcohol: 10, guns: 0 },
  { name: 'Rob', alcohol: 2, guns: 0 },
  { name: 'Joerg', alcohol: 20, guns: 0 }
];

// Queue of festivalgoers at entry
// no. of alcohol units
// no. of guns
// Create a securityCheck function that takes the queue as a parameter and returns a list of festivalgoers who can enter the festival
// If guns are found, remove them and put them on the watchlist (only the names)
// If alcohol is found confiscate it (set it to zero and add it to security_alchol_loot) and let them enter the festival

console.log('I have bad sec guys, they didn\'t found anything')

function checkEm (arr: any[]): any[] {
  let canEnter: string[] = [];
  queue.forEach(function (item: any, index: number) {
    if (queue[index].alcohol > 0) {
      securityAlcoholLoot += queue[index].alcohol;
      queue[index].alcohol = 0;
    } 
    if (queue[index].guns > 0) {
      watchlist.push(queue[index].name);     
    } else {
      canEnter.push(queue[index].name);
    }
  });
  console.log(`We have ${securityAlcoholLoot} bottle of alchohol.`);
  console.log(`They're on watchlist: ${watchlist}`);
  return canEnter;
}

console.log('They can enter: ' + checkEm(queue));