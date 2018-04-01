'use strict';

const fs = require('fs');

export function upgF35(money: number, tempMoney: number, myData: any[]) {
  
  const cost: number = 3000;

  if(money < cost + 1000) {
    console.log(`\r\nYou cant purchase upgrade/Aircraft, if you would left with less than 1000$`);
  } else {
    myData[3] == 1
      ? myData[3] = 2
      : myData[3] = 3;

    money -= cost;

    myData[5] = money;

    console.log(`\r\nYou just spent ${tempMoney - money}$ to upgrade your F35 fighters to level ${myData[3]}`);
    
    fs.writeFileSync('./gameData/myCarrier.txt', myData.join(';'));
    
    console.log(`\r\nYou have ${money}$ left!`);
  }
}
