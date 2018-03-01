'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
const hbs: number = canvas.height < canvas.width ? canvas.height : canvas.width; 
const max: any = parseInt(prompt('Please set the number of lines (in Number): '));
const scale: number = hbs / 3;
const side: number = scale / Math.sqrt(3);
const startMax: number = max;

ctx.strokeRect(0, 0, hbs, hbs);



function drawLine(max: number,middleX: number, middleY:number, length: number) {    
  for(let i: number = -1; i < 2; i += 2) {
    for(let j: number = -1; j < 2; j +=2) {
      let x: number = middleX;
      let y: number = middleY;
      let tempMax: number = max;
      let tempLength: number = length;
      ctx.beginPath();
      ctx.moveTo(middleX + length / 2 * j, middleY + length / 2 * i);
      ctx.lineTo(middleX + length / 2 * j + length * i, middleY + length / 2 * i);
      ctx.lineTo(middleX + length / 2 * j + length * i, middleY + length / 2 * i - length * j);
      ctx.lineTo(middleX + length / 2 * j, middleY + length / 2 * i - length * j);
      ctx.lineTo(middleX + length / 2 * j, middleY + length / 2 * i);
      ctx.stroke();
      if (max > 1) {
        tempMax -= 1;
        x += j * length;
        tempLength = length / 3;
        y += i * length;
        //drawLine(tempMax, x, middleY, tempLength);
        //drawLine(tempMax, middleX, y, tempLength);
        drawLine(tempMax, middleX, middleY, tempLength);
        drawLine(tempMax, x, y, tempLength);
      }
    }
  }
}


drawLine(max, hbs/2, hbs/2, scale);

ctx.beginPath();
ctx.moveTo(hbs + 100, hbs / 2);
ctx.lineTo(hbs + 100 + 60, hbs / 2);
ctx.lineTo(hbs + 100 + 30, hbs / 2 + 30 * Math.sqrt(3));
ctx.lineTo(hbs + 100, hbs / 2);
ctx.moveTo(hbs + 100, hbs / 2 + 30 * Math.sqrt(3) / 3 * 2);
ctx.lineTo(hbs + 100 + 60, hbs / 2 + 30 * Math.sqrt(3) / 3 * 2);
ctx.lineTo(hbs + 100 + 30, hbs / 2 - 30 * Math.sqrt(3)  + 30 * Math.sqrt(3) / 3 * 2);
ctx.lineTo(hbs + 100, hbs / 2 + 30 * Math.sqrt(3) / 3 * 2);
ctx.fill();


