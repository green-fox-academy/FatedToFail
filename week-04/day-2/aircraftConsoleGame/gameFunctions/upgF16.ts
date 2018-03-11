'use strict';

const fs = require('fs');

export function upgF16(money: number, tempMoney: number, myData: any[]) {
  
  const cost: number = myData[3] === 1
    ? 1000
    : 1500;
  
  myData[3] === 1
    ? myData[3] = 2
    : myData[3] = 3;

  money -= cost;

  console.log(`\r\nYou just spent ${tempMoney - money}$ to upgrade your F16 fighters to level ${myData[0].split(',')[1]}`)
  
  fs.writeFileSync('./gameData/myCarrier.txt', myData.join(';'))
}