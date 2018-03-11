'use strict';
import Aircraft from "./Aircraft";

export default abstract class F35 extends Aircraft {
 
  constructor(ammo: number) {
    super(ammo);
    this.baseDmg = 50;
    this.type = 'F35'
  }

  isPriority(): boolean {
    return false;
  }
}