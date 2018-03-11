'use strict';

export default abstract class Aircraft {
  
  maxAmmo: number;
  baseDmg: number;
  type: string;
  currentAmmo: number = 0;

  constructor (ammo: number) {
    this.currentAmmo = ammo;
  }

  abstract howToFight(): number;

  getDestroyed(): number {
    return -1;
  }

  stuckedAmmo(): number {
    return 0;
  }

  miss(): number {
    this.emptyAmmo();
    return 0;
  }

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