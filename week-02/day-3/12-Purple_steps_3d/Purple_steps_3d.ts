'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function drawRect (size: number, xyPos) {
  ctx.beginPath();
  ctx.fillStyle = '#ff00ff';
  ctx.fillRect( xyPos * 10 ,xyPos * 10, (size + 1) * 10, (size + 1) * 10);
  ctx.fill();
  ctx.beginPath();
  ctx.strokeRect( xyPos * 10 ,xyPos * 10, (size + 1) * 10, (size + 1) * 10);
  ctx.stroke();
}
let j: number = 0
for (let i: number = 0; i < 8; i++) {
  j += i;
  drawRect(i, j)
}