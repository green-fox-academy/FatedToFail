'use strict';
import F35 from './F35';

export default class F35lvl3 extends F35 {
  howToFight(): number {
    let outcome: number = Math.random()
    return outcome < 0.75
      ? this.fight()
      : outcome < 0.83
        ? this.miss()
        : outcome < 0.98
          ? this.stuckedAmmo()
          : this.getDestroyed()
  }
}