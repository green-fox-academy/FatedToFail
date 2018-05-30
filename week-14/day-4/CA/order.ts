'use strict';

import { Food } from './food';

export class Order {
  
  customer: string;
  isHomeDelivery: boolean;
  orderPlacedOn: Food;

  constructor(customerName: string, homeDelivery: boolean, food: Food) {
    this.customer = customerName;
    this.isHomeDelivery = homeDelivery;
    this.orderPlacedOn = food;
  }

}
