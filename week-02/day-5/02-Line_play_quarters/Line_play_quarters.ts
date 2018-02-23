'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
const hbs: number = canvas.height < canvas.width ? canvas.height : canvas.width; 

const max: any = parseInt(prompt('Please set the number of lines (in Number): '));

const scale: number = hbs / (max + 1);

ctx.strokeRect(0, 0, hbs, hbs);

function drawLine(xTo: number, yTo: number) {  
  ctx.beginPath();
  ctx.strokeStyle = 'purple';
  ctx.moveTo(hbs / 2 - xTo, hbs / 2);
  ctx.lineTo(hbs / 2, hbs / 2 + yTo);
  ctx.lineTo(hbs / 2 + xTo, hbs / 2);
  ctx.lineTo(hbs / 2, hbs / 2 - yTo);
  ctx.lineTo(hbs / 2 - xTo, hbs / 2);
  ctx.stroke();
}

let x: number = hbs / 2;
let y: number = 0;

drawLine(y, x)

for(let i: number = 0; i <= max; i++) {
  drawLine(x, y);
  x -= scale / 2;
  y += scale / 2; 
}
