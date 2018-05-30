'use strict';

import { Food } from './food';

export class Hamburger extends Food {

  constructor() {
    super();
    this.name = 'Hamburger';
    this.price = 1200;
    this.timeUntilReady = 5;
  }

}
