'use strict';

import { Food } from './food';

export class Pizza extends Food {

  constructor() {
    super();
    this.name = 'Pizza';
    this.price = 990;
    this.timeUntilReady = 15;
  }

}
