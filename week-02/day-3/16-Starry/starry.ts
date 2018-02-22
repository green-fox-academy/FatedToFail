'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)

ctx.fillRect(0, 0, 600, 400);

for (let i: number = 0; i < Math.random() * 50 + 50; i++) {
  let rectSize: number = Math.random() * 15 + 5;
  ctx.fillRect(Math.random() * 590 , Math.random() * 390, rectSize, rectSize)
  ctx.fillStyle = `hsla(266, 0%, ${Math.random() * 50 + 30}%, 1)`;
}