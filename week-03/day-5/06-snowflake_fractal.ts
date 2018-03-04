'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
const howBigTheCanvasIs: number = canvas.height < canvas.width ? canvas.height : canvas.width;
const repetition: number = 5;

function drawIt(x: number, y: number, scale: number, end: number): void {
  
  let hexaHeight: number = scale * Math.sqrt(3) / 2;

  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + scale, y);
  ctx.lineTo(x + scale + scale / 2, y + hexaHeight);
  ctx.lineTo(x + scale, y + hexaHeight * 2);
  ctx.lineTo(x, y + hexaHeight * 2);
  ctx.lineTo(x - scale / 2, y + hexaHeight);
  ctx.lineTo(x, y);
  ctx.stroke();

  if(end >= 1) {
    drawIt(x, y, scale / 3, end - 1);
    drawIt(x + scale / 3 * 2, y, scale / 3, end - 1);
    drawIt(x, y + hexaHeight / 3 * 4, scale / 3, end - 1);
    drawIt(x - scale / 3, y + hexaHeight / 3 * 2, scale / 3, end - 1);
    drawIt(x + scale / 3 * 2, y + hexaHeight / 3 * 4, scale / 3, end - 1);
    drawIt(x + scale, y + hexaHeight / 3 * 2, scale / 3, end - 1);
  }
}

drawIt(howBigTheCanvasIs / 4, (howBigTheCanvasIs - howBigTheCanvasIs * Math.sqrt(3) / 2) / 2, howBigTheCanvasIs / 2, repetition);