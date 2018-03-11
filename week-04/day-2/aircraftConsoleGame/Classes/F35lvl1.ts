'use strict';
import F35 from './F35';

export default class F35lvl1 extends F35 {
  howToFight(): number {
    let outcome: number = Math.random()
    return outcome < 0.45
      ? this.fight()
      : outcome < 0.75
        ? this.miss()
        : outcome < 0.90
          ? this.stuckedAmmo()
          : this.getDestroyed()
  }
}