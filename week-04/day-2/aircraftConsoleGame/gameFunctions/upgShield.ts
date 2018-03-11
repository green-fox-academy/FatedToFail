'use stirct';

const fs = require('fs');

export function upgShield(money: number, tempMoney: number, myData: any[]) {
  
  let data: string = myData[0];
  const cost: number = 1000;

  if(money + 200 < cost) {
    console.log(`\r\nYou cant spend money on upgrade/buying if the cost(${cost}$) + 200$ is more than your current money`)
  } else {
    data.split(',')[1] === '1'
      ? myData[0] = `${data.split(',')[0]},${0.75}`
      : myData[0] = `${data.split(',')[0]},${0.5}`;

    money -= cost;

    myData[5] = money;

    console.log(`\r\nYou just spent ${tempMoney - money}$ to upgrade your shield to ${myData[0].split(',')[1]}`);

    fs.writeFileSync('./gameData/myCarrier.txt', myData.join(';'));
    
    console.log(`\r\nYou have ${money}$ left!`);
  }
}
