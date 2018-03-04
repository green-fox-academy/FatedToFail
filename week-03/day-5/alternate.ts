'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
const hbs: number = canvas.height < canvas.width ? canvas.height : canvas.width; 
const max: any = Math.random() * 3 + 6;//parseInt(prompt('Please set the number of lines (in Number): '));
const scale: number = hbs / 9;

let lengthScaling: number = 0.8;
let rotate: number = Math.PI / (Math.random() * 4 + 4);

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
  setTimeout(function() { 
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + Math.sin(angle) * length / 3, y + Math.cos(angle) * length / 3);
  ctx.strokeStyle = `hsl(${Math.floor(max) % 2 === 0 ? Math.random() * 30 + 20 : Math.random() * 30 + 300}, 100%, 50%)`;
  ctx.stroke();
  }, 800);
  setTimeout(function() { 
  ctx.beginPath();
  ctx.moveTo(x + Math.sin(angle) * length / 3, y + Math.cos(angle) * length / 3);
  ctx.lineTo(x + Math.sin(angle) * length / 3 * 2, y + Math.cos(angle) * length / 3 * 2);
  ctx.strokeStyle = `hsl(${Math.floor(max) % 2 === 0 ? Math.random() * 30 + 20 : Math.random() * 30 + 300}, 100%, 50%)`;
  ctx.stroke();
  }, 800);
  setTimeout(function() { 
  ctx.beginPath();
  ctx.moveTo(x + Math.sin(angle) * length / 3 * 2, y + Math.cos(angle) * length / 3 * 2);
  ctx.lineTo(newX, newY);
  ctx.strokeStyle = `hsl(${Math.floor(max) % 2 === 0 ? Math.random() * 30 + 20 : Math.random() * 30 + 300}, 100%, 50%)`;
  ctx.stroke();
  }, 800);  

  if (max > Math.random() * 3 + 0.5) {
    setTimeout(function() { 
      drawLine(max - 1, newX, newY, length * (lengthScaling + Math.random() * 0.15), angle);
      drawLine(max - 1, newX, newY, length * (lengthScaling + Math.random() * 0.15), angle + rotate + Math.random() * 0.5);
      drawLine(max - 1, newX, newY, length * (lengthScaling + Math.random() * 0.15), angle - rotate - Math.random() * 0.5);
    }, 800);
  }
}

drawLine(max, hbs / 2, hbs - 150, scale, giveAngle);