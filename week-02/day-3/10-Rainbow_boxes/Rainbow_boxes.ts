'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with rainbow colored squares.

let howManyRect: number = 360;

function drawRect (sizeRect: number, colorStyle: number) {
  ctx.beginPath();
  ctx.fillRect(300 - sizeRect / 2 , 200 -sizeRect / 2, sizeRect, sizeRect);
  ctx.fillStyle = `hsl(${colorStyle}, 100%, 50%)`;
  ctx.fill();
}

for (let i: number = howManyRect; i > 0 ; i--) {
  drawRect(i * 360 / howManyRect, i * (360/howManyRect));
}