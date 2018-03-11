'use strict';
import F16 from './F16';

export default class F16lvl3 extends F16 {
  howToFight(): number {
    let outcome: number = Math.random()
    return outcome < 0.75
      ? this.fight()
      : outcome < 0.90
        ? this.miss()
        : outcome < 0.98
          ? this.stuckedAmmo()
          : this.getDestroyed()
  }
}