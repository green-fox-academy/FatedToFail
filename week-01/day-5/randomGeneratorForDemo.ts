'use strict'

let name1: string[] = ['Áron','Sanyi','Roni','Balázs','Bazsi','Dóri','Sári','Eszter','András','Gergö','Margo','Tomi', 'Szandi', 'Alpár'];
let name2: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n'];

let hello: number = 0;
let count: number = 0;

console.log(Date.now());

while(count < 14){
    
    for(let j: number = 1; j < 150000000; j++){ }
    hello = (Date.now() % (14));
    if (name1[hello] !== name2[hello]){
        console.log(`A sorban a(z) ${count + 1}. Demozó: ${name1[hello]}`);
        name2.splice(hello, 1, name1[hello]);
        count += 1;

    } //else { console.log('h')}
}
