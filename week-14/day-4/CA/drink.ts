'use strict';

import { Goods } from "./goods";

export abstract class Drink extends Goods {

  volume: number;

  constructor(name: string, price: number, timeUntilReady: number, volume: number) {
    super(name, price, timeUntilReady)
    this.volume = volume;
  }

}

