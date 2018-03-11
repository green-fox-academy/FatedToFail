'use strict';

const fs = require('fs');

export function upgHangar(money: number, tempMoney: number, myData: any[]) {
  
  const cost: number = myData[4] == 6
    ? 1000
    : 1500;
  
  myData[4] == 6
    ? myData[4] = 8
    : myData[4] = 10;

  money -= cost;

  console.log(`\r\nYou just spent ${tempMoney - money}$ to upgrade your Hangar to have ${myData[4]} space`)
  
  fs.writeFileSync('./gameData/myCarrier.txt', myData.join(';'))
}