'use strict';

abstract class Instrument {
  
  protected name: string;
  abstract play();
}

abstract class StringedInstruments {
  protected numberOfStrings: number;

  play(): string {
    return this.sound();
  }

  abstract sound()
}

class ElectricGuitar extends StringedInstruments {
  name = 'Elctric Guitar';
  constructor (numberOfStrings: number = 6) {
    super()
    this.numberOfStrings = numberOfStrings;
  }
  sound(): string {
    return 'Twang';
  };
}

class BassGuitar extends StringedInstruments {
  name = 'Bass Guitar';
  constructor (numberOfStrings: number = 4) {
    super()
    this.numberOfStrings = numberOfStrings;
  }
  sound(): string {
    return 'Duum-duum-duum';
  };
}

class Violin extends StringedInstruments {
  name = 'Violin';
  constructor (numberOfStrings: number = 4) {
    super()
    this.numberOfStrings = numberOfStrings;
  }
  sound(): string {
    return 'Screech';
  };
}

console.log('Test 1, create Electric Guitar, Bass Guitar and Violin with default strings.');
let guitar = new ElectricGuitar();
let bassGuitar = new BassGuitar();
let violin = new Violin();

console.log('Test 1 Play');
console.log(guitar.play());
console.log(bassGuitar.play());
console.log(violin.play());

console.log('Test 2, create Electric Guitar, Bass Guitar with 7 and 5 strings .');
let guitar2 = new ElectricGuitar(7);
let bassGuitar2 = new BassGuitar(5);

console.log('Test 2 Play');
console.log(guitar2.play());
console.log(bassGuitar2.play());