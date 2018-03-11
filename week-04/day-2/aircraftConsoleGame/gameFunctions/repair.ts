'use strict';

const fs = require('fs');

export function repair(money: number, tempMoney: number, myData: any[]) {
  
  const maxHP: number = 5000;
  const tempHP: number = parseInt(myData[0].split(',')[0]);

  maxHP - tempHP < money
    ? myData[0] = `5000,${myData[0].split(',')[1]}`
    : console.log('\r\nYou would spend all your money and woudn\'t be able to fight')

  money -= maxHP - tempHP;

  myData[5] = money;

  console.log(`\r\nYou just spent ${tempMoney - money}$ to repair your Carrier`)
  
  fs.writeFileSync('./gameData/myCarrier.txt', myData.join(';'));
  
  console.log(`\r\nYou have ${money}$ left!`);
}
