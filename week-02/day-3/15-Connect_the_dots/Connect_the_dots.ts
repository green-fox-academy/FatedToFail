'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a function that takes 1 parameter:
// A list of [x, y] points
// and connects them with green lines.
// Connect these to get a box: [[10, 10], [290,  10], [290, 290], [10, 290]]
// Connect these: [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],
// [120, 100], [85, 130], [50, 100]]

function connectLine (arr: number[][]) {
  ctx.beginPath();
  ctx.strokeStyle = 'green';
  arr.forEach(function(item: any, index: number) {
    if (index === 0) {
      ctx.moveTo(item[0], item[1]);
    } else {
      ctx.lineTo(item[0], item[1]);
    }
  });
  ctx.lineTo(arr[0][0], arr[0][1]);
  ctx.stroke();
}

let myArray1: number[][] = [[10, 10], [290,  10], [290, 290], [10, 290]];
let myArray2: number[][] = [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70], [120, 100], [85, 130], [50, 100]]


connectLine(myArray1);
connectLine(myArray2);