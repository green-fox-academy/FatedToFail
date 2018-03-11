'use strict';
import F16 from './F16';

export default class F16lvl2 extends F16 {
  howToFight(): number {
    let outcome: number = Math.random()
    return outcome < 0.60
      ? this.fight()
      : outcome < 0.79
        ? this.miss()
        : outcome < 0.94
          ? this.stuckedAmmo()
          : this.getDestroyed();
  }
}