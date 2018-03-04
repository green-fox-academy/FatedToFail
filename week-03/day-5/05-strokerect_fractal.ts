'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
const howBigTheCanvasIs: number = canvas.height < canvas.width ? canvas.height : canvas.width;
const repetition: number = 5;

function drawIt(x: number, y: number, scale: number, end: number): void {
  
  let lineWidth: number = scale / 10;

  ctx.lineWidth = lineWidth;
  ctx.strokeRect(x, y, scale, scale);

  if(end >= 1) {

  }
}

drawIt(howBigTheCanvasIs / 4, howBigTheCanvasIs / 4, howBigTheCanvasIs / 2, repetition);