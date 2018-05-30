'use strict';

import { OrderQueue } from './orderQueue';
import { Order } from './order';
import { Goods } from './goods';
import { Pizza } from './pizza';

export class MyPizzaPlace implements OrderQueue {

  orderQueue: Order[];
  private maxCapacity: number;
  private static profit: number = 0;

  constructor() {
    this.maxCapacity = 50;
    this.orderQueue = [];
  }

  placeOrder(customer: string, homeDelivery: boolean, typeOfGoods: Goods): void {
    const capacityUtilisation: number = this.getCapacity();

    if (capacityUtilisation < this.maxCapacity) {
      this.orderQueue.push(new Order(customer, homeDelivery, typeOfGoods));
      console.log('The order is placed!');
    } else {
      console.log('Sorry we don\'t have capacity for your order now \r\nPlease try again later!');
    }
  }

  serveNextOrder(): void {
    if (this.orderQueue.length !== 0)  {
      const firstOrderIndex = 0;
      const firstOrder = this.orderQueue[firstOrderIndex];
      
      this.orderQueue.splice(firstOrderIndex, 1);
      MyPizzaPlace.profit += firstOrder.orderPlacedOn.price;

      console.log(`For ${firstOrder.customer} the ${firstOrder.orderPlacedOn.name} was ${firstOrder.isHomeDelivery ? 'delivered' : 'served'}!`);
    } else {
      console.log('We are out of orders!');
    }
  }

  orderStatus(): string {
    const capacityUtilisation: number = this.getCapacity();

    return `We have ${this.orderQueue.length} order in our Queue and ${this.maxCapacity > capacityUtilisation ? 'have' : 'don\'t have'} capacity for more orders\r\nOur profit is: ${MyPizzaPlace.profit} HUF`;
  }

  private getCapacity(): number {
    return this.orderQueue.length === 0
      ? 0
      : this.orderQueue
        .map((order: Order): number => order.orderPlacedOn.timeUntilReady)
        .reduce((servingTimeA, servingTimeB) => servingTimeA + servingTimeB);
  }

}
