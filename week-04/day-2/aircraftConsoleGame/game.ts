import Carrier from "./Classes/Carrier";
import F16 from "./Classes/F16";
import F16lvl1 from "./Classes/F16lvl1";
import F35lvl1 from "./Classes/F35lvl1";
import F16lvl2 from "./Classes/F16lvl2";
import F35lvl2 from "./Classes/F35lvl2";
import F16lvl3 from "./Classes/F16lvl3";
import F35lvl3 from "./Classes/F35lvl3";
import { fight } from "./gameFunctions/figth";
import Aircraft from "./Classes/Aircraft";
import { upgShield } from "./gameFunctions/upgShield";
import { upgF16 } from "./gameFunctions/upgF16";
import { upgF35 } from "./gameFunctions/upgF35";

'use strict';
const fs = require('fs');

process.argv.forEach(e => {
  console.log(e);  
});

let check: string[] = ['-fight', '-upgShield', '-upgF16', '-upgF35', '-newGame', '-status', '-upgHangar', '-buyF16', '-buyF35', '-repair', undefined];

let myData: any[] = fs.readFileSync('./gameData/myCarrier.txt', 'utf-8').split(';');
let enemyData: any[] = fs.readFileSync(`./gameData/enemy${myData[6]}.txt`, 'utf-8').split(';');

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

if (process.argv[2] === '-status') {
  console.log('Fight method')
}
if (process.argv[2] === '-upgHangar') {
  console.log('Fight method')
}
if (process.argv[2] === '-buyF16') {
  console.log('Fight method')
}
if (process.argv[2] === '-buyF35') {
  console.log('Fight method')
}
if (process.argv[2] === '-repair') {
  console.log('Fight method')
}
if (check.indexOf(process.argv[2]) === -1) {
  console.log('wrong method')
}

//fs.writeFileSync('./gameData/myCarrier.txt', )

if (process.argv[2] === '-newGame') {
  console.log('Fight method')
}


