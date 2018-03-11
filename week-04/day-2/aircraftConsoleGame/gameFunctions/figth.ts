import Carrier from "../Classes/Carrier";
const fs = require('fs');

'use strict';
export function fight(money: number, tempMoney: number, enemyCarrier: Carrier, myCarrier: Carrier, myData: any[], enemyData: any[]) {
  money = myCarrier.fill(money);
  console.log(`\r\nYou spent ${tempMoney - money}$ to refill your Aircrafts\r\n`)
  
  console.log('Your figthers:')
  let dmgToEnemy: number = myCarrier.fight(enemyCarrier);
  
  console.log('\r\nEnemy fighters:')
  let dmgToMe: number = enemyCarrier.fight(myCarrier);
  
  console.log(`\r\nYou dealt: ${dmgToEnemy} damage to the enemy Carrier.\r\nIt has ${enemyCarrier.health} health left\r\n`);
  console.log(`The enemy dealt: ${dmgToMe} damage to your Carrier.\r\nIt has ${myCarrier.health} health left\r\n`);

  enemyCarrier.health <= 0
    ? myData[2] === 10
      ? console.log('Congratulation! You beat the game!\r\n\r\nStart a new game if you liked it!\r\n-newGame')
      : console.log('Congratulation! You destroyed the enemy Carrier!\r\nGet ready for the next level\r\n\r\nCheck it out with -status')
    : console.log('Your enemy is still alive\r\nGet ready for the next figth');

  myData[0] = `${myCarrier.health},${myCarrier.shield}`;
  enemyData[0] = `${enemyCarrier.health},${enemyCarrier.shield}`;

  myCarrier.aircrafts = myCarrier.aircrafts.filter(e => e.isAlive);
  enemyCarrier.aircrafts = enemyCarrier.aircrafts.filter(e => e.isAlive);

  myData[1] = myCarrier.aircrafts.map(e => `${e.type},${e.currentAmmo}`).join('_');
  enemyData[1] = enemyCarrier.aircrafts.map(e => `${e.type}`).join('_');

  myData[5] = money;

  fs.writeFileSync(`./gameData/enemy${myData[6]}.txt`, enemyData.join(';'));

  if (enemyCarrier.health <= 0) {
    myData[6] = parseInt(myData[6]) + 1;
  }

  fs.writeFileSync('./gameData/myCarrier.txt', myData.join(';'));
  
  console.log(`\r\nYou have ${money}$ left!`);
}