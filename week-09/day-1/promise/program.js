'use strict';

// setTimeout(() => {
//   console.log('TIMED OUT!');
// }, 300);

// var promise = new Promise(function (fulfill, reject) {
//   let runThis = () => {fulfill('FULFILLED!')};
//   runThis();
// });

// promise
//   .then((result) => {setTimeout(() => console.log(result), 300)});

// Your solution here

// var promise = new Promise(function (fulfill, reject) {
//   setTimeout(() => {reject(new Error('REJECTED!'))}, 300);
// });

// function onReject (error) {
//   console.log(error.message);
// }

// promise.then(() => {} ,onReject);

// let promise = new Promise(function(fulfill, reject) {
//   function fulfilled() {fulfill('I FIRED')};
//   fulfilled();
//   function rejectIt() {reject(new Error('I DID NOT FIRE'))};
//   rejectIt();
// });

// function onReject(error) {
//   console.log(error.message);
// }

// promise.then(console.log, onReject);

// let promise = new Promise(function(fulfill, reject) {
//   fulfill('PROMISE VALUE');
// });

// promise.then(console.log);
// console.log('MAIN PROGRAM');

  // The way you have learned: create promise through the constructor.

  // var promise = new Promise(function (fulfill, reject) {
  //   fulfill('SECRET VALUE');
  // });

  // Introducing: Promise.resolve
  // It does the exact same thing as above:

  // var promise = Promise.resolve('SECRET VALUE');

  // Likewise...

  // var promise = new Promise(function (fulfill, reject) {
  //   reject(new Error('SECRET VALUE'));
  // });

  // var promise = Promise.reject(new Error('SECRET VALUE'));

  // promise.catch(console.log)

// first().then(second).then(console.log);

// function parsePromised() {
//   return new Promise((fulfill, reject) => {
//     try {
//       JSON.parse(process.argv[2])
//     } catch (err) {
//       reject(err);
//     }
//     fulfill('YAAAY');
//   });
// }

function onError(error) {
  console.log(error.message);
}

// parsePromised()
//   .then(console.log)
//   .catch(onError)

// function alwaysThrows() {
//   throw new Error('OH NOES');
// }

// function iterate(integer) {
//   console.log(integer);
//   return integer + 1;
// }

// Promise.resolve(1)
//   .then(iterate)
//   .then(iterate)
//   .then(iterate)
//   .then(iterate)
//   .then(iterate)
//   .then(alwaysThrows)
//   .then(iterate)
//   .then(iterate)
//   .then(iterate)
//   .then(iterate)
//   .then(iterate)
//   .catch(onError);



function all(prom1, prom2) {
  
  let counter = 0;
  let result = [];
  
  function fulfillIt(fullfill, place) {
    return function(value) {
      counter++;
      result[place] = value;
      if (counter === 2) {
        fullfill(result);
      }
    };
  }

  return new Promise((fullfill, reject) => {
    prom1.then(fulfillIt(fullfill, 0));
    prom2.then(fulfillIt(fullfill, 1));
  });
}

all(getPromise1(), getPromise2()).then(console.log);
