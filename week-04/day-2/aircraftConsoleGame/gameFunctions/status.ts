import Carrier from "../Classes/Carrier";

'use strict';

export function status(money: number, myCarrier: Carrier, myData: any[], enemyCarrier: Carrier, enemyData: any[]) {
  console.log(`  
  Your are on the ${myData[6]}. level, ${10 - myData[6]} level(s) to go.

  You have:      ${money}$ on your account
                 ${myCarrier.health} HP
                 ${myCarrier.aircrafts.map(e => e.type).filter(e => e === 'F16').length} pc(s) F16 Aricraft Fighter on level ${myData[2]}
                 ${myCarrier.aircrafts.map(e => e.type).filter(e => e === 'F35').length} pc(s) F35 Aricraft Fighter on level ${myData[3]}
                 ${myCarrier.shield}x multiplier to damage beared (Shield)
                 ${myData[4] - myCarrier.aircrafts.length} free space(s) in your hangar

  To check upgrades: type /-upgrades/

  Your current   ${enemyCarrier.health} HP
  enemy has:     ${enemyCarrier.aircrafts.map(e => e.type).filter(e => e === 'F16').length} pc(s) F16 Aricraft Fighter on level ${enemyData[2]}
                 ${enemyCarrier.aircrafts.map(e => e.type).filter(e => e === 'F35').length} pc(s) F35 Aricraft Fighter on level ${enemyData[2]}
                 ${enemyCarrier.shield}x multiplier to damage beared (Shield)`);
}