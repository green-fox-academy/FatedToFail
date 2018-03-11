'use strict';

const fs = require('fs');

export function buyF35(money: number, tempMoney: number, myData: any[]) {
  
  const cost: number = 3000;
  
  if(money + 200 < cost) {
    console.log(`\r\nYou cant spend money on upgrade/buying if the cost(${cost}$) + 200$ is more than your current money`)
  } else {
    myData[1] === ''
      ? myData[1] += 'F35,0'
      : myData[1] += '_F35,0';

    money -= cost;

    myData[5] = money;

    console.log(`\r\nYou just spent ${tempMoney - money}$ to buy an F35 fighter`);
    
    fs.writeFileSync('./gameData/myCarrier.txt', myData.join(';'));
    
    console.log(`\r\nYou have ${money}$ left!`);
  }
}
