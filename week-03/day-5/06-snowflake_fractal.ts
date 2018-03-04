'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
const howBigTheCanvasIs: number = canvas.height < canvas.width ? canvas.height : canvas.width;
const repetition: number = 5;

function drawIt(x: number, y: number, scale: number, end: number, color: string): void {
  
  let triHeight: number = scale * Math.sqrt(3) / 2;

  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + scale / 2, y + triHeight);
  ctx.lineTo(x - scale / 2, y + triHeight);
  ctx.lineTo(x, y);
  ctx.fillStyle = `color`;
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(x, y + triHeight + triHeight / 3);
  ctx.lineTo(x + scale / 2, y + triHeight / 3);
  ctx.lineTo(x - scale / 2, y + triHeight / 3);
  ctx.lineTo(x, y + triHeight + triHeight / 3);
  ctx.fillStyle = `color`;
  ctx.fill();

/*  if(end >= 1) {
    drawIt(x, y, scale / 3, end - 1);
    drawIt(x + scale / 3 * 2, y, scale / 3, end - 1);
    drawIt(x, y + hexaHeight / 3 * 4, scale / 3, end - 1);
    drawIt(x - scale / 3, y + hexaHeight / 3 * 2, scale / 3, end - 1);
    drawIt(x + scale / 3 * 2, y + hexaHeight / 3 * 4, scale / 3, end - 1);
    drawIt(x + scale, y + hexaHeight / 3 * 2, scale / 3, end - 1);
  } */
}

drawIt(howBigTheCanvasIs / 2, 5, (howBigTheCanvasIs - 10) * Math.sqrt(3) / 2, repetition, 'black');