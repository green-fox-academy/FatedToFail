'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
const hbs: number = canvas.height < canvas.width ? canvas.height : canvas.width; 
const max: any = 2 * parseInt(prompt('Please set the number of lines (in Number): ')) - 1;
const scale: number = hbs / (max + 1);
const side: number = scale / Math.sqrt(3);
const startMax: number = max;

ctx.strokeRect(0, 0, hbs, hbs);



function drawLine(max: number) {    

   
  if (max >= (startMax + 1) / 2) {

}
drawLine(max);
}


