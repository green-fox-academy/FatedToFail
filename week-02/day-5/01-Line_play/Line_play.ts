'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
const hbs: number = canvas.height < canvas.width ? canvas.height : canvas.width; 

const max: any = parseInt(prompt('Please set the number of lines (in Number): '));

const scale: number = hbs / (max + 1);

ctx.strokeRect(0, 0, hbs, hbs);

function drawLine(mTo: number, lTo: number) {
  const mToFixY: number = 0;
  const lToFixX: number = hbs;
  
  ctx.beginPath();
  ctx.strokeStyle = 'purple';
  ctx.moveTo(mTo, mToFixY);
  ctx.lineTo(lToFixX, lTo);
  ctx.stroke();

  ctx.beginPath();
  ctx.strokeStyle = 'green';
  ctx.moveTo(lTo, lToFixX);
  ctx.lineTo(mToFixY, mTo);
  ctx.stroke();
}

let x: number = scale;
let y: number = scale;

for(let i: number = 0; i <= max; i++) {
  x = i * scale;
  y = i * scale;
  drawLine(x, y);
}