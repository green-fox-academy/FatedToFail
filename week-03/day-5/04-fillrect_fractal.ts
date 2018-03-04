'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
const hbs: number = canvas.height < canvas.width ? canvas.height : canvas.width; 
const max: any = Math.random() * 3 + 6;//parseInt(prompt('Please set the number of lines (in Number): '));
const scale: number = hbs / 3;

function drawIt(x: number, y: number, s: number, counter: number) {
  ctx.fillRect(x, y, s, s);
  if (counter > 1) {
    for(let i: number = -1; i < 2; i++) {
      for(let j: number = -1; j < 2; j++) {
        drawIt(x + s / 3 + s * i, y + s / 3 + s * j, s / 3, counter - 1);
      }
    }
  }
}
drawIt(scale, scale, scale, 5);