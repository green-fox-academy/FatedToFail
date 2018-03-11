'use stirct';

import Carrier from "../Classes/Carrier";
const fs = require('fs');

export function upgShield(money: number, tempMoney: number, myData: any[]) {
  
  let data: string = myData[0];
  
  data.split(',')[1] === '1'
    ? myData[0] = `${data.split(',')[0]},${0.8}`
    : myData[0] = `${data.split(',')[0]},${0.5}`;

  fs.writeFileSync('./gameData/myCarrier.txt', myData.join(';'))
}