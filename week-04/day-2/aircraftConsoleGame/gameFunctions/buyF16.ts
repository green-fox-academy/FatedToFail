'use strict';

const fs = require('fs');

export function buyF16(money: number, tempMoney: number, myData: any[]) {
  
  const cost: number = 2000
  
  myData[1] === ''
    ? myData[1] += 'F16,0'
    : myData[1] += '_F16,0';

  money -= cost;

  console.log(`\r\nYou just spent ${tempMoney - money}$ to buy an F16 fighter`)
  
  fs.writeFileSync('./gameData/myCarrier.txt', myData.join(';'))
}