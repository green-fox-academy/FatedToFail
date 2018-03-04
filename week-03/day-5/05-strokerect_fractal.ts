'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
const howBigTheCanvasIs: number = canvas.height < canvas.width ? canvas.height : canvas.width;
const repetition: number = 3git;

function drawIt(x: number, y: number, scale: number, end: number): void {
  
  let lineWidth: number = scale / 10;

  ctx.lineWidth = lineWidth;
  ctx.strokeRect(x, y, scale, scale);

  if(end >= 1) {
    for(let i: number = -1; i < 2; i = i + 2) {
      for(let j: number = -1; j < 2; j = j + 2) {
        drawIt(x + scale / 4 + i * scale / 2, y + scale / 4 + j * scale / 2, scale / 2, end -1);
      }
    }
  }
}

drawIt(howBigTheCanvasIs / 4, howBigTheCanvasIs / 4, howBigTheCanvasIs / 2, repetition);