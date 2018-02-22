'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.

for (let i: number = 0; i <= 20; i ++) {
  for (let j: number = 0; j <= 30; j++) {
    if(i === 0 || i === 20 || j === 0 || j === 30){
      ctx.beginPath();
      ctx.moveTo(j * 20, i * 20);
      ctx.lineTo(300, 200);
      ctx.stroke();
      ctx.closePath();
    }
  }
}