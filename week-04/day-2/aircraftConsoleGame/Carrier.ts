'use strict';
import Aircraft from './Aircraft';
import F16lvl1 from './F16lvl1';
import F16lvl2 from './F16lvl2';
import F16lvl3 from './F16lvl3';
import F35lvl1 from './F35lvl1';
import F35lvl2 from './F35lvl2';
import F35lvl3 from './F35lvl3';

export default class Carrier {
  
  aircrafts: Aircraft[] = [];
  storedAmmo: number;
  health: number;

  constructor () {

  }

  add(aircraft: Aircraft) {
    this.aircrafts.push(aircraft);
  }

  fill(amount: number): number {
    this.aircrafts.sort((a, b) => {
      return b.isPriority()
        ? a.isPriority()
          ? -1
          : 1
        : -1
    }).forEach(e => {
      amount = e.refill(this.storedAmmo);
    });
    return amount;
  }

  fight(enemy: Carrier) {
    this.aircrafts.forEach(e => {
      enemy.health -= e.fight();
    })
  }

  getStatus() {
    return `HP: ${this.health}, F35 count: ${this.aircrafts.filter(e => e.isPriority()).length}, F16 count: ${this.aircrafts.filter(e => !e.isPriority()).length}, Ammo: ${this.storedAmmo}`;
  }
}

