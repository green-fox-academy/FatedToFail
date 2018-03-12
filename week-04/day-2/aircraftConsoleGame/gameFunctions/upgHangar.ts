'use strict';

const fs = require('fs');

export function upgHangar(money: number, tempMoney: number, myData: any[]) {
  
  const cost: number = 3000;
  
  if(money + 1000 < cost) {
    console.log(`\r\nYou cant purchase upgrade/Aircraft, if you would left with less than 1000$`);
  } else {
    myData[4] == 6
      ? myData[4] = 8
      : myData[4] = 10;

    money -= cost;

    myData[5] = money;

    console.log(`\r\nYou just spent ${tempMoney - money}$ to upgrade your Hangar to have ${myData[4]} space`);
    
    fs.writeFileSync('./gameData/myCarrier.txt', myData.join(';'));
    
    console.log(`\r\nYou have ${money}$ left!`);
  }
}
