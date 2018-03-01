'use strict';
// Every animal has a hunger value, which is a whole number
// Every animal has a thirst value, which is a whole number
// when creating a new animal object these values are created with the default 50 value
// Every animal can eat() which decreases their hunger by one
// Every animal can drink() which decreases their thirst by one
// Every animal can play() which increases both by one

class Animal {
  
  private hunger: number = 0;
  private thirst: number = 0;
  private name: string = '';

  constructor(hunger: number, thirst: number, name: string) {
    this.name = name;
    this.hunger = Math.floor(hunger);
    this.thirst = Math.floor(thirst);
  }

  eat() {
    this.hunger -= 1;
  }
  drink() {
    this.hunger -= 1;
  }
  play() {
    this.hunger += 1;
    this.thirst += 1;
  }
  status() {
    console.log(`Hunger is: ${this.hunger} \r\nThirst is: ${this.thirst} \r\nThis is a ${this.name}`);
  }
}
let bird: Animal = new Animal(10, 15, 'bird');
bird.status();
bird.eat();
bird.eat();
bird.status();