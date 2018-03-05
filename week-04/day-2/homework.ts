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

class Student {

  name: string;
  age: number;
  gender: string;
  previousOrganization: string;
  skippedDays: number;

  constructor(name: string, age: number, gender: string, previousOrganization: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.previousOrganization = previousOrganization;
  }

  introduce () {
    console.log(`Hi, i'm ${this.name}, a ${this.age} year old ${this.gender} from ${this.previousOrganization} who skipped ${this.skippedDays} days from the course already."`);
  }

  getGoal() {
    console.log('Be a junior software developer');
  }
}