'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function drawRect (xyPos: number) {
  ctx.beginPath();
  ctx.fillStyle = '#ff00ff';
  ctx.fillRect(1 + xyPos * 15 ,1 + xyPos * 15, 15, 15);
  ctx.fill();
  ctx.beginPath();
  ctx.strokeRect(1 + xyPos * 15 ,1 + xyPos * 15, 15, 15);
  ctx.stroke();
}

for (let i: number = 0; i < 20; i++) {
  drawRect(i);
}