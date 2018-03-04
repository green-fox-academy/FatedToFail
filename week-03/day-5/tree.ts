'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
const hbs: number = canvas.height < canvas.width ? canvas.height : canvas.width; 
const max: any = 9;//parseInt(prompt('Please set the number of lines (in Number): '));
const scale: number = hbs / 9;

let lengthScaling: number = 0.8;
let rotate: number = Math.PI / 6;

//function getX(x: number, l: number, a: number): number {
//  return x + Math.sin(a) * length;
//}

//function getY(y: number, l: number, a: number): number {
//  return y + Math.sin(a) * length;
///}

let giveAngle: number = Math.PI;

function drawLine(max: number, x: number, y: number, length: number, angle: number) {    
  
  let newX: number = x + Math.sin(angle) * length;
  let newY: number = y + Math.cos(angle) * length;

  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(newX, newY);
  ctx.strokeStyle = `hsl(${30 + max * 8}, 100%, 50%)`;
  ctx.stroke();
  

  if (max > 1) {
    setTimeout(function() { 
    drawLine(max - 1, newX, newY, length * (lengthScaling + 0.1), angle);
    drawLine(max - 1, newX, newY, length * lengthScaling, angle + rotate);
    drawLine(max - 1, newX, newY, length * lengthScaling, angle - rotate);
    }, 1500);
  }
}

drawLine(max, hbs / 2, hbs - 150, scale, giveAngle);