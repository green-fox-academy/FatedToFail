'use strict';

import { Goods } from './goods';

export class Order {
  
  customer: string;
  isHomeDelivery: boolean;
  orderPlacedOn: Goods;

  constructor(customerName: string, homeDelivery: boolean, goods: Goods) {
    this.customer = customerName;
    this.isHomeDelivery = homeDelivery;
    this.orderPlacedOn = goods;
  }

}
