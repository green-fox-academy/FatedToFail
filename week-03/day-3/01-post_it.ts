'use strict';

class PostIt {

  backgroundColor: string;
  text: string;
  textColor: string;

  constructor(backgroundColor: string, text: string, textColor: string) {
    this.backgroundColor = backgroundColor;
    this.text = text;
    this.textColor = textColor;
  }
}

let note1: PostIt = new PostIt('orange', 'Idea 1', 'blue');
let note2: PostIt = new PostIt('pink', 'Awesome', 'black');
let note3: PostIt = new PostIt('yellow', 'Superb!', 'green');

console.log(note1.backgroundColor, note2.text, note3.textColor);
