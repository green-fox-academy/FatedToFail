'use strict';

abstract class Animal {
  name: string;
  age: number;
  numberOfLegs: number;

  constructor(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

  abstract breed();
  
  protected breedFromEgg() {
    return 'laying eggs';
  }

  protected breedWithMiniature() {
    return 'pushing miniature versions out';
  }
}

class Reptile extends Animal {
  breed(): string {
    return this.breedFromEgg();
  }
}

class Bird extends Animal {
  breed(): string {
    return this.breedFromEgg();
  }
}

class Mammal extends Animal {
  breed(): string {
    return this.breedWithMiniature();
  }
}

let reptile = new Reptile("Crocodile");
let mammal = new Mammal("Koala");
let bird = new Bird("Parrot");

console.log("How do you breed?");
console.log("A " + reptile.getName() + " is breeding by " + reptile.breed());
console.log("A " + mammal.getName() + " is breeding by " + mammal.breed());
console.log("A " + bird.getName() + " is breeding by " + bird.breed());

export {Animal};