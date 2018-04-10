const Panama = {
  cash: 0,
  name: 'Panama',
  tax: '1%',
  deposit: function(amt) {
    this.cash += 1000;
  }
};

const Cyprus = {
  cash: 0,
  name: 'Cyprus',
  tax: '5%',
  deposit: function(amt) {
    this.cash += 1000;
  }
};

const Shuffler = {
  cash: 10000,
  pick: function() {
    if (Math.random() < 0.5) {
      this.cash -= 1000 * (1 + parseInt(Panama.tax) / 100);
      Panama.deposit();
      console.log('Panama got 1000');
    } else {
      this.cash -= 1000 * (1 + parseInt(Cyprus.tax) / 100);
      Cyprus.deposit();
      console.log('Cyprus got 1000');;
    }
  }
};

Shuffler.pick(); // prints Panama got 1000
Shuffler.pick(); // prints Cyprus got 1000
Shuffler.pick(); // prints Panama got 1000
Shuffler.pick(); // prints Cyprus got 1000

console.log(Panama.cash); // 2000 
console.log(Cyprus.cash); // 2000 

console.log(Shuffler.cash);
