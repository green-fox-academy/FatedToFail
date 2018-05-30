'use strict';

import { Food } from './food';

export class Cola extends Food {

  constructor() {
    super();
    this.name = 'Cola';
    this.price = 350;
    this.timeUntilReady = 0;
  }

}
