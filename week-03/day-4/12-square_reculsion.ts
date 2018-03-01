'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
const hbs: number = canvas.height < canvas.width ? canvas.height : canvas.width; 
const max: any = parseInt(prompt('Please set the number of lines (in Number): '));
const scale: number = hbs / 3;

ctx.strokeRect(0, 0, hbs, hbs);

function drawLine(max: number,middleX: number, middleY:number, length: number) {    
  for(let i: number = -1; i < 2; i += 2) {
    for(let j: number = -1; j < 2; j +=2) {
      ctx.beginPath();
      ctx.moveTo(middleX + length / 2 * j, middleY + length / 2 * i);
      ctx.lineTo(middleX + length / 2 * j + length * i, middleY + length / 2 * i);
      ctx.lineTo(middleX + length / 2 * j + length * i, middleY + length / 2 * i - length * j);
      ctx.lineTo(middleX + length / 2 * j, middleY + length / 2 * i - length * j);
      ctx.lineTo(middleX + length / 2 * j, middleY + length / 2 * i);
      ctx.stroke();
      if (max > 1) {
        drawLine(max - 1, middleX + j * length, middleY, length / 3);
        drawLine(max - 1, middleX, middleY + i * length, length / 3);
        //drawLine(max - 1, middleX + j * length, middleY + i * length, length / 3);
        //drawLine(max - 1, middleX, middleY, length / 3);
      }
    }
  }
}

drawLine(max, hbs/2, hbs/2, scale);