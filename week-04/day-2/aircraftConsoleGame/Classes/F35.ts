'use strict';
import Aircraft from "./Aircraft";

export default abstract class F35 extends Aircraft {
 
  constructor(ammo: number) {
    super(ammo);
    this.baseDmg = 25;
    this.type = 'F35'
    this.maxAmmo = 14;
  }

  isPriority(): boolean {
    return false;
  }
}