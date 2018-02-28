'use strict';
class Thing {
  private name: string;
  private completed: boolean;

  constructor(name: string){
      this.name = name;
  }
  public complete() {
      this.completed = true;
  }
  get getComplete() {
    if (this.completed) {
      return 'X';
    } else {
      return ' '; 
    }
  }

  get getName() {
    return this.name;
  }
}

export {Thing};