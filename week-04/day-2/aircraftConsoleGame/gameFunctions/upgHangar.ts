'use strict';

const fs = require('fs');

export function upgHangar(money: number, tempMoney: number, myData: any[]) {
  
  const cost: number = 1000;
  
  if(money + 200 < cost) {
    console.log(`\r\nYou cant spend money on upgrade/buying if the cost(${cost}$) + 200$ is more than your current money`)
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
