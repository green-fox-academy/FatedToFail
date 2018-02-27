'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
const hbs: number = canvas.height < canvas.width ? canvas.height : canvas.width; 
const max: any = 2 * parseInt(prompt('Please set the number of lines (in Number): ')) - 1;
const scale: number = hbs / (max + 1);
const side: number = scale / Math.sqrt(3);
const startMax: number = max;

ctx.strokeRect(0, 0, hbs, hbs);



function drawLine(max: number) {    

   
  if (max >= (startMax + 1) / 2) {
    for (let j: number = -1; j < 2; j += 2) {
      let xStart: number = (hbs - side) / 2 - (side * 1.5 * (startMax - max) * j);
      let yStart: number = scale / 2 * (startMax - max + 1);
      for (let i: number = 0; i < max; i++) {
        /*if (startMax > max && check) {
          check = false;
          xStart -= i * 1.5 * side;
          yStart += side * Math.sqrt(3) / 2;
          i -= 1;
        } else if (startMax > max && !check) {
          check = true;
          xStart += 2 * i * 1.5 * side;
        }*/
        
        ctx.beginPath();
        ctx.moveTo(xStart, yStart);
        ctx.lineTo(xStart + side, yStart);
        ctx.lineTo(xStart + side * 1.5, yStart + side * Math.sqrt(3) / 2);
        ctx.lineTo(xStart + side, yStart + side * Math.sqrt(3));
        ctx.lineTo(xStart, yStart + side * Math.sqrt(3));
        ctx.lineTo(xStart - side / 2, yStart + side * Math.sqrt(3) / 2);
        ctx.lineTo(xStart, yStart);
        ctx.stroke();

        yStart += side * Math.sqrt(3); 
      }
    }
    max -= 1;
    drawLine(max);
  }
}
drawLine(max);


