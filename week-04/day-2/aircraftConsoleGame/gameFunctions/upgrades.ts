import Carrier from "../Classes/Carrier";

'use strict';

export function upgrades(money: number, myCarrier: Carrier, myData: any[]) {
  console.log(`
You have:        ${money}$ on your account
                                               Ammo cost 5$                      To buy type:
                 ${myCarrier.aircrafts.filter(e => e.type === 'F16').length} pc(s) F16 Aricraft Fighter  ammo: 10           (cost: 1500$)  /-buyF16/
                 ${myCarrier.aircrafts.filter(e => e.type === 'F35').length} pc(s) F35 Aricraft Fighter  ammo: 14           (cost: 4000$)  /-buyF35/

                                                                                 To upgrade type:
You are on the:  ${myData[2]} level on F16 Aircraft Fighters from 3  (upgrade cost: 3000$)  /-upgF16/
                 ${myData[3]} level on F35 Aircraft Fighters from 3  (upgrade cost: 3000$)  /-upgF35/
                 ${(myData[4] - 4) / 2} level on your Hangar from 3            (upgrade cost: 3000$)  /-upgHangar/
                 ${Math.floor((1.26 - myData[0].split(',')[1]) * 4)} level on your shield from 3            (upgrade cost: 3000$)  /-upgShield/

Shield           level 1:  1.00x multiplier
                 level 2:  0.75x multiplier
                 level 3:  0.50x multiplier

Hangar           level 1:  6 slots for Aircraft
                 level 2:  8 slots for Aircraft
                 level 3:  10 slots for Aircraft

                           To hit:           To miss:    To not able to shoot:   To get destroyed:
Fighther         level 1:    45%               30%                15%                   10%
                 level 2:    60%               19%                15%                    6%
                 level 3:    75%                8%                15%                    2%`);
}
