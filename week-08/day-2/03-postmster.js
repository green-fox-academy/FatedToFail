// Write the logic of the postMaster function. It shoud have two parameters: 
//  - poBox: a string that identifies the sender
//  - dispatchFunction: a function that will be called with the message
//
// The postMaster function should return a function that takes two arguments:
//  - targetBox: a string that identifies the po_box
//  - message: a string that contains the message
// If the poBox matches the targetBox only that case call the dispatchFunction

function postMaster(poBox, dispatchFunction) {
  return (isItTheRightBox, message) => {
    if (isItTheRightBox === poBox) {
      dispatchFunction(message);
    }
  };
};

function myAction( message ) {
  console.log('The message says:', message);
}

// Create a private box with a poBox identifier
const myPrivateBox = postMaster('super_secret_box', myAction);

myPrivateBox('super_secret_box', 'The eagle has landed!'); // logs the message
myPrivateBox('false_alarm', 'The eagle has landed! Heeeeloooooo!'); // nothing is logged
