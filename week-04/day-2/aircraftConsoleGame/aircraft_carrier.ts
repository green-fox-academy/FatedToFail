'use strict';

abstract class Aircraft {
  
  maxAmmo: number;
  baseDmg: number;
  type: string;
  currentAmmo: number = 0;

  fight(): number {
    return this.baseDmg * this.emptyAmmo();
  }

  emptyAmmo(): number {
    const tempAmmo: number = this.currentAmmo;
    this.currentAmmo = 0;
    return tempAmmo;
  }

  refill(ammo: number): number {
    if (this.maxAmmo - this.currentAmmo < ammo) {
      this.currentAmmo = this.maxAmmo;
      ammo -= this.maxAmmo - this.currentAmmo;
    } else {
      this.currentAmmo += ammo;
      ammo = 0;
    }
    return ammo;
  }

  getType(): string {
    return this.type;
  }

  getStatus(): string {
    return `Type ${this.type}, Ammo: ${this.currentAmmo}, Base Damage: ${this.baseDmg}, All Damage: ${this.currentAmmo * this.baseDmg}`
  }

  abstract isPriority();
}

class F16 extends Aircraft {
 
  constructor() {
    super();
    this.baseDmg = 30;
    this.type = 'F16'
  }

  isPriority(): boolean {
    return true;
  }
}

class F35 extends Aircraft {
 
  constructor() {
    super();
    this.baseDmg = 50;
    this.type = 'F35'
  }

  isPriority(): boolean {
    return false;
  }
}

let air1: F16 = new F16();
let air2: F16 = new F16();
let air3: F16 = new F16();
let air4: F16 = new F16();
let air5: F35 = new F35();
let air6: F35 = new F35();
let air7: F35 = new F35();

console.log(air1.getStatus());
console.log(air2.getStatus());
console.log(air3.getStatus());
console.log(air4.getStatus());
console.log(air5.getStatus());
console.log(air6.getStatus());
console.log(air7.getStatus());
console.log(air7.getType());
