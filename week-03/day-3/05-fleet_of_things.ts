'use strict';
import {Thing} from "./thing";
import {Fleet} from "./fleet";

let fleet = new Fleet();
//* crete a fleet of things to have this output:*/
//* 1. [ ] Get milk */
//* 2. [ ] Remove the obstacles */
//* 3. [x] Stand up */
//* 4. [x] Eat lunch */
//* Hint: You have to create a Print method also */
let toDo1: Thing = new Thing('Get milk');
let toDo2: Thing = new Thing('Remove the obstacles');
let toDo3: Thing = new Thing('Stand up');
let toDo4: Thing = new Thing('Eat lunch');

fleet.add(toDo1);
fleet.add(toDo2);
fleet.add(toDo3);
fleet.add(toDo4);

toDo3.complete();
toDo4.complete();

fleet.print();
// function print(from: Fleet) {
//   from.getThings.forEach((e, i) => {
//     console.log(`${i + 1}. [${e.getComplete}] ${e.getName}`)
//   });
// }

//print(fleet);