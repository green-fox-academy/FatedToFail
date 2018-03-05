'use srict';

class Person {

  name: string;
  age: number;
  gender: string;

  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  introduce () {
    console.log(`Hi, i'm ${this.name}, a ${this.age} year old ${this.gender}`);
  }

  getGoal() {
    console.log('My goal is: Live for the moment');
  }
}

