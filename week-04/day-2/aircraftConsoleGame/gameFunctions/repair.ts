'use strict';

const fs = require('fs');

export function repair(money: number, tempMoney: number, myData: any[]) {
  
  const maxHP: number = 5000;

  maxHP - myData[0].split(',')[0] < money
    ? myData[0] = `5000,${myData[0].split(',')[1]}`
    : console.log('\r\nYou would spend all your money and woudn\'t able to fight')

  money -= maxHP - myData[0].split(',')[0];

  console.log(`\r\nYou just spent ${tempMoney - money}$ to repair your Carrier`)
  
  fs.writeFileSync('./gameData/myCarrier.txt', myData.join(';'))
}