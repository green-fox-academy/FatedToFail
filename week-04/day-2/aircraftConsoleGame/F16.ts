'use strict';
import Aircraft from "./Aircraft";

export default abstract class F16 extends Aircraft {
 
  constructor(ammo: number) {
    super(ammo);
    this.baseDmg = 15;
    this.type = 'F16'
    this.maxAmmo = 10;
  }

  isPriority(): boolean {
    return false;
  }
}