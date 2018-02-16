'use strict'
//Array with 14 different names
let name1: string[] = ['Áron','Sanyi','Roni','Balázs','Bazsi','Dóri','Sári','Eszter','András','Gergö','Margo','Tomi', 'Szandi', 'Alpár'];
//Array for checking later
let name2: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n'];

//2 variable - 1 for the generated number - 1 for counting
let randomNumber: number = 0;
let count: number = 0;

//just a try how Date.now() defines it's value
//console.log(Date.now());

//the cicle for the 14 output
while(count < 14){
    
    //this part is just for making it last longer, becouse if it's too fast
    //the same timstamp will generate the same randomNumber
    for(let j: number = 1; j < 150000000; j++){ }
    
    //this generates the randomNumber
    randomNumber = (Date.now() % (14));
    
    //this is a check for, did we had that person on the output row before or not
    if (name1[randomNumber] !== name2[randomNumber]){
        
        //generate the output
        console.log(`A sorban a(z) ${count + 1}. Demozó: ${name1[randomNumber]}`);
        
        //checkin array get's a random person name for the same index as in name1
        name2.splice(randomNumber, 1, name1[randomNumber]);
        
        //just counting till everybody is assinged to his/her row in Demo
        count += 1;

    } //else { console.log('h')}
}

console.log("Have FUN everyone! ;)")
