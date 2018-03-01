'use strict';
// Create Sharpie class
// We should know about each sharpie their color (which should be a string), width (which will be a floating point number), inkAmount (another floating point number)
// When creating one, we need to specify the color and the width
// Every sharpie is created with a default 100 as inkAmount
// We can use() the sharpie objects
// which decreases inkAmount
class Sharpie {

  private color: string = '';
  private width: number = 0;
  private ink: number = 0;

  constructor(color: string, width: number) {
    this.color = color;
    this.width = width;
    this.ink = 100;
  }
  use() {
    this.ink -= this.width;
  }
  status() {
    console.log(`The ${this.color} with the ${this.width} width has ${this.ink} left`)
  }
}
let paint: Sharpie = new Sharpie('pink', 5.6);
paint.status();
paint.use();
paint.use();
paint.status();