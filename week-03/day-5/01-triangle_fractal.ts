'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
const howBigTheCanvasIs: number = canvas.height < canvas.width ? canvas.height : canvas.width;
const repetition: number = 5;

ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(howBigTheCanvasIs, 0);
ctx.lineTo(howBigTheCanvasIs / 2, howBigTheCanvasIs * Math.sqrt(3) / 2);
ctx.lineTo(0, 0);
ctx.fillStyle = 'white';
ctx.fill();

function drawIt(x: number, y: number, scale: number, end: number): void {
  
  let triHeigth: number = scale * Math.sqrt(3) / 2;
  
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + scale / 2, y + triHeigth);
  ctx.lineTo(x - scale / 2, y + triHeigth);
  ctx.lineTo(x, y);
  ctx.stroke();

  if(end >= 1) {
    drawIt(x - scale / 2, y, scale / 2, end - 1);
    drawIt(x + scale / 2, y, scale / 2, end - 1);
    drawIt(x, y + triHeigth, scale / 2, end - 1)
  }
}

drawIt(howBigTheCanvasIs / 2, 0, howBigTheCanvasIs / 2, repetition);