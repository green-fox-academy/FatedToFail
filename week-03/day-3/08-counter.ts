'use strict';
// Create a Counter class
// which has an integer property
// when creating it should have a default value 0 or we can specify it when creating
// we can add(number) to increase the counter's value by a whole number
// or we can add() without parameters just increasing the counter's value by one
// and we can get() the current value as string
// also we can reset() the value to the initial value
class Counter {
  private initial: number;
  private counter: number;

  constructor(howBig?: number) {
    if (howBig === undefined) {
      this.counter = 0;
      this.initial = 0;
    } else {
      this.counter = Math.floor(howBig);
      this.initial = this.counter;
    }
  }
  add(counter?: number) {
    if (counter === undefined) {
      this.counter += 1;
    } else if (counter < 0) {
      console.log('Sorry, you can only increase the amount this way')
    } else {
    this.counter += Math.floor(counter);
    }
  }
  get getValue(): string {
    return this.counter.toString();
  }
  reset() {
    this.counter = this.initial;
  }
}
let someAmount: Counter = new Counter(20);
console.log(someAmount.getValue);
someAmount.add();
someAmount.add(30);
someAmount.add(-30);
console.log(someAmount.getValue);
