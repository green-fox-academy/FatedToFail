'use strict';

import { MyPizzaPlace } from "./myPizzaPlace";
import { Cola } from './cola';
import { OrangeJuice } from './orangeJuice';
import { Hamburger } from './hamburger';
import { Pizza } from './pizza';

const myCompany: MyPizzaPlace = new MyPizzaPlace();

console.log('\r\nFirst day of my new company')
console.log('\r\n--------------------------------\r\n')

console.log(myCompany.orderStatus());

console.log('\r\n--------------------------------\r\n')

myCompany.placeOrder('Sara', true, new Hamburger())
myCompany.placeOrder('Attila', true, new Cola())
myCompany.placeOrder('Richard', false, new OrangeJuice())
myCompany.placeOrder('Balazskaxd', true, new Pizza())
myCompany.placeOrder('Angela', false, new Hamburger())
myCompany.placeOrder('Mercedes', false, new Cola())
myCompany.placeOrder('Béla', false, new OrangeJuice())
myCompany.placeOrder('Eevee', false, new Hamburger())
myCompany.placeOrder('Mr. Green', true, new Cola())
myCompany.placeOrder('Mr. Fox', false, new OrangeJuice())

console.log('\r\n--------------------------------\r\n')

console.log(myCompany.orderStatus());

console.log('\r\n--------------------------------\r\n')

myCompany.serveNextOrder();
myCompany.serveNextOrder();

console.log('\r\n--------------------------------\r\n')

console.log(myCompany.orderStatus());

console.log('\r\n--------------------------------\r\n')

myCompany.placeOrder('Sara', true, new Hamburger())
myCompany.placeOrder('Attila', true, new Pizza())
myCompany.placeOrder('Andrew', false, new OrangeJuice())

console.log('\r\n--------------------------------\r\n')

console.log(myCompany.orderStatus());

console.log('\r\n--------------------------------\r\n')

myCompany.serveNextOrder();
myCompany.serveNextOrder();
myCompany.serveNextOrder();
myCompany.serveNextOrder();
myCompany.serveNextOrder();
myCompany.serveNextOrder();
myCompany.serveNextOrder();
myCompany.serveNextOrder();
myCompany.serveNextOrder();
myCompany.serveNextOrder();

console.log('\r\n--------------------------------\r\n')

console.log(myCompany.orderStatus());
