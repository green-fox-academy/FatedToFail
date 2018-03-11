'use strict';

const fs = require('fs');

export function buyF16(money: number, tempMoney: number, myData: any[]) {
  
  const cost: number = 2000;
  
  if(money + 200 < cost) {
    console.log(`\r\nYou cant spend money on upgrade/buying if the cost(${cost}$) + 200$ is more than your current money`)
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
