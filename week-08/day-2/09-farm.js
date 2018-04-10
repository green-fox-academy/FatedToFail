let Animals = function() {
  this.hunger= 5;
  this.thirst= 5;
  this.eat= function() {
    this.hunger--;
  };
  this.drink = function() {
    this.thirst--;
  };
  this.play = function () {
    this.thirst++;
    this.hunger++;
  };
};

let Farm = function(slotses) {
  this.slots = slotses;
  this.animals = [];
  this.whoIsTheLeastHungry = function() {
    let leastHungry = 999;
    let whichAnimalToSlaughter = -1;
    this.animals.forEach((animal, index) => {
      if (animal.hunger < leastHungry) {
        leastHungry = animal.hunger;
        whichAnimalToSlaughter = index;
      }
    });
    return whichAnimalToSlaughter;
  };
  this.breed = function() {
    if (this.slots > this.animals.length) {
      this.animals.push(new Animals());
    }
  };
  this.slaughter = function() {
    if (this.whoIsTheLeastHungry !== -1) {
      this.animals.splice(this.whoIsTheLeastHungry(), 1);
    }
  };
  this.state = function() {
    let currentState = this.animals.length === 0
      ? 'bankrupt'
      : this.animals.length === this.slots
        ? 'full'
        : 'okay';
    console.log(`The farm has ${this.animals.length} living animals we are ${currentState}`);
  };
  this.progress = function() {
    this.animals.forEach(animal => {
      if (Math.random() > 0.5) {
        animal.eat();
      }
      if (Math.random() > 0.5) {
        animal.drink();
      }
      if (Math.random() > 0.5) {
        animal.play();
      }
    });
    if (Math.random() > 0.5) {
      this.breed();
    }
    if (Math.random() > 0.5) {
      this.slaughter();
    }
    this.state();
  };
  for(let i = 0; i < this.slots; i++) {
    this.breed();
  }
};

// Create a sheep farm with 20 slots
const SheepFarm = new Farm(20);

console.log(SheepFarm.animals); // Should log 20 Animal objects

//const button = document.querySelector('button');

// Add a click event to the button and call 'progress'

// The progress function should log the following to the console:
//  -  The farm has 20 living animals, we are full
