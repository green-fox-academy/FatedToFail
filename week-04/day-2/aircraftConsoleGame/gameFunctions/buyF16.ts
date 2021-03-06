'use strict';

const fs = require('fs');

export function buyF16(money: number, tempMoney: number, myData: any[]) {
  
  const cost: number = 1500;
  
  if(money < cost + 1000) {
    console.log(`\r\nYou cant purchase upgrade/Aircraft, if you would left with less than 1000$`);
  } else {
    myData[1] === ''
      ? myData[1] += 'F16,0'
      : myData[1] += '_F16,0';

    money -= cost;

    myData[5] = money;

    console.log(`\r\nYou just spent ${tempMoney - money}$ to buy an F16 fighter`);
    
    fs.writeFileSync('./gameData/myCarrier.txt', myData.join(';'));

    console.log(`\r\nYou have ${money}$ left!`);
  }
}
