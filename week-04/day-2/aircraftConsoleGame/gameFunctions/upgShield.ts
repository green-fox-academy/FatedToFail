'use stirct';

const fs = require('fs');

export function upgShield(money: number, tempMoney: number, myData: any[]) {
  
  let data: string = myData[0];
  const cost: number = 3000;

  if(money + 1000 < cost) {
    console.log(`\r\nYou cant purchase upgrade/Aircraft, if you would left with less than 1000$`);
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
