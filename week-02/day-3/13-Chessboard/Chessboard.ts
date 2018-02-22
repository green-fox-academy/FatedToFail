'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Fill the canvas with a checkerboard pattern.

function drawRect (xPos: number, yPos: number) {
  ctx.beginPath();
  ctx.fillRect(xPos * 15 ,yPos * 15, 15, 15);
  ctx.fill();
}

for ( let i: number = 0; i < 40; i++) {
  for (let j: number = 0; j < 60; j++) {
    if (i % 2 === j % 2) {
      drawRect(i, j);
    }
  }
}