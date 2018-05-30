'use strict';

import { Order } from './order';
import { Goods } from './goods';

export interface OrderQueue {
  
  orderQueue: Order[];

  placeOrder(customer: string, homeDelivery: boolean, typeOfGoods: Goods): void;
  serveNextOrder(): void;
  orderStatus(): string;

}
