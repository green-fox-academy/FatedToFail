'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
const hbs: number = canvas.height < canvas.width ? canvas.height : canvas.width; 
const max: any = parseInt(prompt('Please set the number of lines (in Number): '));
const scale: number = hbs * Math.sqrt(3) / 3;

function drawLine(max: number,middleX: number, middleY:number, length: number) {    
  setTimeout(function() {
    ctx.beginPath();
    ctx.moveTo(middleX, middleY);
    ctx.lineTo(middleX + length, middleY);
    ctx.lineTo(middleX + length * 1.5, middleY + length / 2 * Math.sqrt(3));
    ctx.lineTo(middleX + length, middleY + length * Math.sqrt(3));
    ctx.lineTo(middleX, middleY + length * Math.sqrt(3));
    ctx.lineTo(middleX - length / 2, middleY + length / 2 * Math.sqrt(3));
    ctx.lineTo(middleX, middleY);
    ctx.strokeStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
    ctx.stroke();
  }, 500);
  if (max > 1) {
    drawLine(max - 1, middleX, middleY, length / 2);
    drawLine(max - 1, middleX, middleY + length * Math.sqrt(3) / 2, length / 2);
    drawLine(max - 1, middleX + 0.75 * length, middleY + length * Math.sqrt(3) / 4, length / 2);
  }
}


drawLine(max, scale / 2, 0, scale);