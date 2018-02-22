'use strict';

let accounts: any[] = [
  { client_name: 'Igor', account_number: 11234543, balance: 203004099.2 },
  { client_name: 'Vladimir', account_number: 43546731, balance: 5204100071.23 },
  { client_name: 'Sergei', account_number: 23456311, balance: 1353600.0 }
];

// Create function that returns the name and balance of cash on an account in a list
// The output should be: "Igor", "203004099.2"
// Create function that transfers an amount of cash from one account to another
// it should have four parameters:
//  - the accounts
//  - from account_number
//  - to account_number
//  - amount of cash to transfer
//
// Log "404 - account not found" if any of the account numbers don't exist to the console.
// transferAmount(accounts, 43546731, 23456311, 500.0);
//After printing the "accounts" it should look like:
// var accounts = [
//	{ 'client_name': 'Igor', 'account_number': 11234543, 'balance': 203004099.2 },
//	{ 'client_name': 'Vladimir', 'account_number': 43546731, 'balance': 5204099571.23 },
//	{ 'client_name': 'Sergei', 'account_number': 23456311, 'balance': 1354100.0 }
//]

// The output should be: "Igor", "203004099.2"
function balancePerPerson (arr: any[]): string[] {
  let tempArr: string[] = [];
  arr.forEach(function(item: string, index: number) {
    tempArr = tempArr.concat(arr[index].client_name + ', ' + arr[index].balance)
  });
  return tempArr;
}
console.log(balancePerPerson(accounts));

function transferMoney (arr: any[], fromAcc: number, toAcc: number, amountOfMoney: number): any[] {
  for (let i: number = 0; i < arr.length;i++){
    if (arr[i].account_number == fromAcc) {
      arr[i].balance -= amountOfMoney;
    } else if (arr[i].account_number == toAcc) {
      arr[i].balance += amountOfMoney;
    }
  }
  return arr;
}
console.log(balancePerPerson(transferMoney(accounts, 43546731, 23456311, 50000)));
