'use strict';

// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array

let matrix: any [] = [];
let matSize: number = 4; //the actual size is the given + 1
for(let i = 0; i <= matSize; i++) {
    matrix[i] = [];
    for (let j = 0; j <= matSize; j++){
        if (i + j === matSize){
            matrix[i][j] = 'j';
        } else {
            matrix[i][j] = 0;
        }
    }
}
console.log(matrix);

