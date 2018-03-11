'use strict';
import F16 from './F16';

export default class F16lvl1 extends F16 {
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