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