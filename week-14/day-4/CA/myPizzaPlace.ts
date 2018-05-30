'use strict';

import { OrderQueue } from './orderQueue';
import { Cola } from './cola';
import { Hamburger } from './hamburger';
import { Pizza } from './pizza';
import { Order } from './order';
import { Food } from './food';

export class MyPizzaPlace implements OrderQueue {

  orderQueue: Order[];
  private maxCapacity: number;

  constructor() {
    this.maxCapacity = 100;
    this.orderQueue = [];
  }

  placeOrder(customer: string, homeDelivery: boolean, typeOfFood: Food): void {
    const capacityUtilisation: number = this.getCapacity();

    if (capacityUtilisation < this.maxCapacity) {
      this.orderQueue.push(new Order(customer, homeDelivery, typeOfFood));
      console.log('The order is placed!');
    } else {
      console.log('Sorry we don\'t have capacity for your order now \r\n Please try again later!');
    }
  }

  serveOrder(index: number): void {
    const order = this.orderQueue[index];
    
    this.orderQueue.splice(index, 1);
    console.log(`For ${order.customer} the ${order.orderPlacedOn.name} was ${order.isHomeDelivery ? 'delivered' : 'served'}!`);
  }

  orderStatus(): string {
    const capacityUtilisation: number = this.getCapacity();

    return `We have ${this.orderQueue.length} order in our Queue and ${this.maxCapacity > capacityUtilisation ? 'have' : 'don\'t have'} capacity for more orders`;
  }

  private getCapacity(): number {
    return this.orderQueue
      .map((order: Order): number => order.orderPlacedOn.timeUntilReady)
      .reduce((servingTimeA, servingTimeB) => servingTimeA + servingTimeB);
  }

}
