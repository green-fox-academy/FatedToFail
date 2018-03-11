'use strict';

const fs = require('fs');

export function upgF16(money: number, tempMoney: number, myData: any[]) {
  
  const cost: number = myData[2] == 1
    ? 1000
    : 1500;
  
  myData[2] == 1
    ? myData[2] = 2
    : myData[2] = 3;

  money -= cost;

  console.log(`\r\nYou just spent ${tempMoney - money}$ to upgrade your F16 fighters to level ${myData[2]}`)
  
  fs.writeFileSync('./gameData/myCarrier.txt', myData.join(';'))
}