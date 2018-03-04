'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
const howBigTheCanvasIs: number = canvas.height < canvas.width ? canvas.height : canvas.width;
const repetition: number = 5;

function drawIt(x: number, y: number, radius: number, end: number): void {
  
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.stroke();

  if(end >= 1) {
    drawIt(x, y - radius / 2, radius / 2, end - 1);
    drawIt(x + radius * Math.sqrt(3) / 4, y + radius / 4, radius / 2, end - 1);
    drawIt(x - radius * Math.sqrt(3) / 4, y + radius / 4, radius / 2, end - 1)
  }
}

drawIt(howBigTheCanvasIs / 2, howBigTheCanvasIs / 2, howBigTheCanvasIs / 2, repetition);