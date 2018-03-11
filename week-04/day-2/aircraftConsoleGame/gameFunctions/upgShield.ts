'use stirct';

import Carrier from "../Classes/Carrier";
const fs = require('fs');

export function upgShield(money: number, tempMoney: number, myData: any[]) {
  
  let data: string = myData[0];
  const cost: number = parseInt(data.split(',')[1]) === 1
    ? 1000
    : 1500;

  data.split(',')[1] === '1'
    ? myData[0] = `${data.split(',')[0]},${0.8}`
    : myData[0] = `${data.split(',')[0]},${0.5}`;

  money -= cost;

  console.log(`\r\nYou just spent ${tempMoney - money}$ to upgrade your shield to ${myData[0].split(',')[1]}`)

  fs.writeFileSync('./gameData/myCarrier.txt', myData.join(';'))
}