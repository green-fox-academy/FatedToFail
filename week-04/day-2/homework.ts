'use srict';

class Person {

  name: string = 'Jane Doe';
  age: number = 30;
  gender: string = 'female';

  constructor(name?: string, age?: number, gender?: string) {
    if (name !== undefined) {
      this.name = name;
    }
    if (age !== undefined) {
      this.age = age;
    }
    if (gender !== undefined) {
    this.gender = gender;
    }
  }

  introduce () {
    console.log(`Hi, i'm ${this.name}, a ${this.age} year old ${this.gender}`);
  }

  getGoal() {
    console.log('My goal is: Live for the moment.');
  }
}

class Student {

  name: string = 'Jane Doe';
  age: number = 30;
  gender: string = 'female';
  previousOrganization: string = 'The School of Life';
  skippedDays: number = 0;

  constructor(name?: string, age?: number, gender?: string, previousOrganization?: string) {
    if (name !== undefined) {
      this.name = name;
    }
    if (age !== undefined) {
      this.age = age;
    }
    if (gender !== undefined) {
    this.gender = gender;
    }
    if (previousOrganization !== undefined) {
      this.previousOrganization = previousOrganization;
    }
  }

  introduce () {
    console.log(`Hi, i'm ${this.name}, a ${this.age} year old ${this.gender} from ${this.previousOrganization} who skipped ${this.skippedDays} days from the course already."`);
  }

  getGoal() {
    console.log('Be a junior software developer.');
  }

  skipDays(numberOfDay: number) {
    this.skippedDays += numberOfDay;
  }
}

class Mentor {

  name: string = 'Jane Doe';
  age: number = 30;
  gender: string = 'female';
  level: string = 'intermediate';

  constructor(name?: string, age?: number, gender?: string, level?: string) {
    if (name !== undefined) {
      this.name = name;
    }
    if (age !== undefined) {
      this.age = age;
    }
    if (gender !== undefined) {
    this.gender = gender;
    }
    if (level !== undefined) {
      this.level = level;
    }
  }

  introduce () {
    console.log(`Hi, i'm ${this.name}, a ${this.age} year old ${this.gender} ${this.level} mentor.`);
  }

  getGoal() {
    console.log('Educate brilliant junior software developers.');
  }
}

class Sponsor {

  name: string = 'Jane Doe';
  age: number = 30;
  gender: string = 'female';
  company: string = 'Google';
  hiredStudents: number = 0;

  constructor(name?: string, age?: number, gender?: string, company?: string) {
    if (name !== undefined) {
      this.name = name;
    }
    if (age !== undefined) {
      this.age = age;
    }
    if (gender !== undefined) {
    this.gender = gender;
    }
    if (company !== undefined) {
      this.company = company;
    }
  }

  introduce () {
    console.log(`Hi, i'm ${this.name}, a ${this.age} year old ${this.gender} who represents ${this.company} and hired ${this.hiredStudents} students so far.`);
  }

  getGoal() {
    console.log('Hire brilliant junior software developers.');
  }

  hire() {
    this.hiredStudents += 1;
  }
}

let people = [];
let mark = new Person('Mark', 46, 'male');
people.push(mark);
let jane = new Person();
people.push(jane);
let john = new Student('John Doe', 20, 'male', 'BME');
people.push(john);
let student = new Student();
people.push(student);
let gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
people.push(gandhi);
let mentor = new Mentor();
people.push(mentor);
let sponsor = new Sponsor();
people.push(sponsor);
let elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
people.push(elon);

student.skipDays(3);

for (let i = 0; i < 6; i++) {
  elon.hire();
}

for (let i = 0; i < 4; i++) {
  sponsor.hire();
}

for (let person of people) {
  person.introduce();
  person.getGoal();
}