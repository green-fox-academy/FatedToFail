import Carrier from "./Classes/Carrier";
import Aircraft from "./Classes/Aircraft";
import F16lvl1 from "./Classes/F16lvl1";
import F35lvl1 from "./Classes/F35lvl1";
import F16lvl2 from "./Classes/F16lvl2";
import F35lvl2 from "./Classes/F35lvl2";
import F16lvl3 from "./Classes/F16lvl3";
import F35lvl3 from "./Classes/F35lvl3";
import { fight } from "./gameFunctions/figth";
import { upgShield } from "./gameFunctions/upgShield";
import { upgF16 } from "./gameFunctions/upgF16";
import { upgF35 } from "./gameFunctions/upgF35";
import { upgHangar } from "./gameFunctions/upgHangar";
import { buyF16 } from "./gameFunctions/buyF16";
import { buyF35 } from "./gameFunctions/buyF35";
import { repair } from "./gameFunctions/repair";

'use strict';
const fs = require('fs');

let check: string[] = ['-fight', '-upgShield', '-upgF16', '-upgF35', '-newGame', '-status', '-upgHangar', '-buyF16', '-buyF35', '-repair', undefined];

let myData: any[] = fs.readFileSync('./gameData/myCarrier.txt', 'utf-8').split(';');
let enemyData: any[] = fs.readFileSync(`./gameData/enemy${myData[6]}.txt`, 'utf-8').split(';');

if(parseInt(myData[0].split(',')[0]) <= 0 || parseInt(myData[5]) === 0) {
  console.log('\r\nYou have lost the game!\r\nPlease type /ts-node game -newGame/ to restart')
} else if (myData[6] == 11) {
  console.log('\r\nYou have \\O/ WON \\O/ the game!\r\nPlease type /ts-node game -newGame/ to restart')
} else {
  let myCarrier: Carrier = new Carrier(myData[0].split(','));
  let enemyCarrier: Carrier = new Carrier(enemyData[0].split(','));

  let money: number = myData[5];
  const tempMoney: number = money;

  enemyData[1].split('_').forEach(e => {
    enemyData[2] === 1
      ? e === 'F16'
        ? enemyCarrier.add(new F16lvl1(10))
        : enemyCarrier.add(new F35lvl1(14))
      : enemyData[2] === 2
        ? e === 'F16'
          ? enemyCarrier.add(new F16lvl2(10))
          : enemyCarrier.add(new F35lvl2(14))
        : e === 'F16'
          ? enemyCarrier.add(new F16lvl3(10))
          : enemyCarrier.add(new F35lvl3(14));
  });

  myData[1].split('_').forEach(e => {
    e.split(',')[0] === 'F16'
      ? myData[2] === 1
        ? myCarrier.add(new F16lvl1(e.split(',')[1]))
        : myData[2] === 2
          ? myCarrier.add(new F16lvl2(e.split(',')[1]))
          : myCarrier.add(new F16lvl3(e.split(',')[1]))
      : e.split(',')[0] === 'F35'
        ? myData[3] === 1
          ? myCarrier.add(new F35lvl1(e.split(',')[1]))
          : myData[3] === 2
            ? myCarrier.add(new F35lvl2(e.split(',')[1]))
            : myCarrier.add(new F35lvl3(e.split(',')[1]))
        : '';
  });

  if (process.argv[2] === undefined) {
    console.log('Game description')
  }

  if (process.argv[2] === '-fight') {
    myCarrier.aircrafts.length === 0
      ? console.log('\r\nYou have no Aircraft, so you cannot go into a fight')
      : fight(money, tempMoney, enemyCarrier, myCarrier, myData, enemyData);
  }

  if (process.argv[2] === '-upgShield') {
    myCarrier.shield == 0.5
      ? console.log('\r\nYou cannot further upgrade your shield (It\'s already maxed out)')
      : upgShield(money, tempMoney, myData);
  }

  if (process.argv[2] === '-upgF16') {
    myData[2] == 3
      ? console.log('\r\nYou cannot further upgrade your F16 figthers (It\'s already maxed out)')
      : upgF16(money, tempMoney, myData);
  }

  if (process.argv[2] === '-upgF35') {
    myData[3] == 3
      ? console.log('\r\nYou cannot further upgrade your F35 figthers (It\'s already maxed out)')
      : upgF35(money, tempMoney, myData);
  }

  // if (process.argv[2] === '-status') {
  //   console.log('Fight method')
  // }

  if (process.argv[2] === '-upgHangar') {
    myData[4] == 10
    ? console.log('\r\nYou cannot further upgrade your Hangar (It\'s already maxed out)')
    : upgHangar(money, tempMoney, myData);
  }

  if (process.argv[2] === '-buyF16') {
    myData[4] == myData[1].split('_').length
      ? console.log('\r\nYou cannot buy more Aircraft, becaouse your Hangar is full!\r\nUpgrade it / Sell an Aircraft / Or lose one in fight')
      : buyF16(money, tempMoney, myData);
  }

  if (process.argv[2] === '-buyF35') {
    myData[4] == myData[1].split('_').length
      ? console.log('\r\nYou cannot buy more Aircraft, becaouse your Hangar is full!\r\nUpgrade it / Sell an Aircraft / Or lose one in fight')
      : buyF35(money, tempMoney, myData);
  }

  if (process.argv[2] === '-repair') {
    repair(money, tempMoney, myData);
  }
}

if (check.indexOf(process.argv[2]) === -1) {
  console.log(`\r\nYou just typed a command that is not exist: ${process.argv[2]}\r\nCheck out /ts-node game/ to get the correct commands`)
}

// if (process.argv[2] === '-newGame') {
//   console.log('Fight method')
// }
