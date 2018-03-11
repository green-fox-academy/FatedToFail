'use strict';

export default abstract class Aircraft {
  
  maxAmmo: number;
  baseDmg: number;
  type: string;
  currentAmmo: number = 0;
  isAlive: boolean = true;

  constructor (ammo: number) {
    this.currentAmmo = ammo;
  }

  abstract howToFight(): number;

  getDestroyed(): number {
    console.log(`${this.type} got destroyed in the fight`);
    this.isAlive = false;
    return 0;
  }

  stuckedAmmo(): number {
    console.log(`${this.type} had trouble. <Error: StuckedAmmoClip>`);
    return 0;
  }

  miss(): number {
    console.log(`${this.type} missed the target`);
    this.emptyAmmo();
    return 0;
  }

  fight(): number {
    console.log(`${this.type} dealt ${this.baseDmg * this.currentAmmo} damage`);
    return this.baseDmg * this.emptyAmmo();
  }

  emptyAmmo(): number {
    const tempAmmo: number = this.currentAmmo;
    this.currentAmmo = 0;
    return tempAmmo;
  }

  refill(ammo: number): number {
    if (this.maxAmmo - this.currentAmmo < ammo) {
      ammo -= this.maxAmmo - this.currentAmmo;
      this.currentAmmo = this.maxAmmo;
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