'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw four different size and color rectangles.
// Avoid code duplication.


//  be kell integerre huzni a random erteket, hogy megszexibb legyen
/*
    function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
    }
*/


function drawRect(string) { 
    let splitted: string[] = rectAttr.split (',',3);
    let sizeX : number = parseInt(splitted[0]); 
    let sizeY: number = parseInt(splitted[1]);
    let colour: string = splitted[2];
    let posX: number = (Math.random() * (canvas.scrollWidth - sizeX));
    let posY: number = (Math.random() * (canvas.scrollHeight - sizeY));
    ctx.fillStyle = colour;
    ctx.fillRect(posX, posY, sizeX, sizeY);
}


for (let i = 0; i<4; i++) {
    let rectAttr = prompt(`Yo! Please costumize your ${i+1}. rectangle like : "width, heigth, color" : `);
    drawRect(rectAttr);

}