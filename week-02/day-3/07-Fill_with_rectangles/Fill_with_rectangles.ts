
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw four different size and color rectangles.
// Avoid code duplication.

for (let i: number = 0; i < 4; i++) {
  ctx.beginPath();
  ctx.fillRect(i * 70 + 10, i * 70 + 10, i * 25 + 10, i * 25 + 10);
  ctx.fillStyle = `rgba(${255 - i * 40},${i * 50},${240 - i * 70},${0.3 + i * 0.2})`;
  ctx.fill();
}