'use strict';

export abstract class Goods {

  price: number;
  timeUntilReady: number;
  name: string;

  constructor(name: string, price: number, timeUntilReady: number) {
    this.name = name;
    this.price = price;
    this.timeUntilReady = timeUntilReady;
  }

}
