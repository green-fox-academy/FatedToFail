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

