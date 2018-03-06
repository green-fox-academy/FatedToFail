'use strict';

class Aircraft {
  
  maxAmmo: number = 0;
  baseDmg: number;
  type: string;
  currentAmmo: number;

  fight(): number {
    return this.baseDmg * this.emptyAmmo();
  }

  emptyAmmo(): number {
    const tempAmmo: number = this.currentAmmo;
    this.currentAmmo = 0;
    return tempAmmo;
  }

  refill(ammo: number): number {
    if (this.maxAmmo - this.currentAmmo > ammo) {
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
}

class F16 extends Aircraft {
 
  constructor() {
    super();
    this.baseDmg = 30;
    this.type = 'F16'
  }
}

class F35 extends Aircraft {
 
  constructor() {
    super();
    this.baseDmg = 50;
    this.type = 'F35'
  }
}