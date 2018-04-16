'use strict';

// setTimeout(() => {
//   console.log('TIMED OUT!');
// }, 300);

var promise = new Promise(function (fulfill, reject) {
  let runThis = () => {fulfill('FULFILLED!')};
  runThis();
});

promise
  .then((result) => {setTimeout(() => console.log(result), 300)});

// Your solution here
