'use strict';

import { Goods } from "./goods";

export abstract class Food extends Goods {

  weight: number;

  constructor(name: string, price: number, timeUntilReady: number, weight: number) {
    super(name, price, timeUntilReady)
    this.weight = weight;
  }

}
