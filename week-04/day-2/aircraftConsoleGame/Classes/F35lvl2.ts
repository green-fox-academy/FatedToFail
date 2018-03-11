'use strict';
import F35 from './F35';

export default class F35lvl2 extends F35 {
  howToFight(): number {
    let outcome: number = Math.random()
    return outcome < 0.60
      ? this.fight()
      : outcome < 0.85
        ? this.miss()
        : outcome < 0.94
          ? this.stuckedAmmo()
          : this.getDestroyed()
  }
}