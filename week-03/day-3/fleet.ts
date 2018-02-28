'use strict';
import {Thing} from "./thing";

class Fleet {
    private things: Thing[] = [];

    constructor(){}
    add(thing: Thing){
        this.things.push(thing);
    }
    get getThings(): Thing[] {
      return this.things;
    }
    print() { 
      this.getThings.forEach((e, i) => {
          console.log(`${i + 1}. [${e.getComplete}] ${e.getName}`);
        });
      }
      
    

}

export {Fleet};