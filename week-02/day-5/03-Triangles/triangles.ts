'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
const hbs: number = canvas.height < canvas.width ? canvas.height : canvas.width; 
const max: any = parseInt(prompt('Please set the number of lines (in Number): '));
const scale: number = hbs / (max);

ctx.strokeRect(0, 0, hbs, hbs);

function drawLine(max: number) {  
  let xStart: number = hbs - max * scale;
  let yStart: number = hbs;
  
  if (max > 0) {
    for (let i = 0; i < max; i++) {
      ctx.beginPath();
      ctx.moveTo(xStart, yStart);
      ctx.lineTo(xStart + scale, yStart);
      ctx.lineTo(xStart + scale / 2, yStart - scale * Math.SQRT2 / 2);
      ctx.lineTo(xStart, yStart);
      ctx.stroke();
      xStart += scale / 2;
      yStart -= scale * Math.SQRT2 / 2;
    }
    max -= 1;
    drawLine(max);
  }
}
drawLine(max);


