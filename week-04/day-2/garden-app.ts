'use strict';

class Garden {

  plants: Plants[] = [];

  newPlant(plant: Plants) {
    this.plants.push(plant);
  }

  gardenStatus(): string {
    let outPut: string = '';
    this.plants.forEach(e => {
      outPut += `The ${e.name} ${e.type} ${e.waterStatus() ? 'needs' : 'doesnt need'} water \n\r` 
    });
    return outPut;
  }

  waterMyGarden(amount: number): string {
    this.plants.filter(e => e.waterStatus()).forEach((e, i, a) => {
      e.waterIt(amount / a.length);
    });
    return `Watering with ${amount}`
  }
}

class Plants {
  
  waterLevel: number = 0;
  name: string;
  type: string;
  
  constructor(name: string) {
    this.name = name;
  }

  waterStatus() {};
  waterIt(amount: number) {};
}

class Flower extends Plants{

  constructor(name: string) {
    super(name);
    this.type = 'Flower';
  }

  waterStatus(): boolean {
    return this.waterLevel < 5;
  }

  waterIt(amount: number) {
    this.waterLevel += amount * 0.75;
  }
}

class Tree extends Plants{

  constructor(name: string) {
    super(name);
    this.type = 'Tree';
  }

  waterStatus(): boolean {
    return this.waterLevel < 10;
  }

  waterIt(amount: number) {
    this.waterLevel += amount * 0.4;
  }
}

let yF: Flower = new Flower('yellow');
let bF: Flower = new Flower('blue');
let pT: Tree = new Tree('purple');
let oT: Tree = new Tree('orange');
let myG: Garden = new Garden();

myG.newPlant(yF);
myG.newPlant(bF);
myG.newPlant(pT);
myG.newPlant(oT);

console.log(myG.gardenStatus());
console.log(myG.waterMyGarden(40));
console.log(myG.gardenStatus());
console.log(myG.waterMyGarden(70));
console.log(myG.gardenStatus());