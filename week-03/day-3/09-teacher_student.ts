'use strict';
// Create Student and Teacher classes
// Student
// learn()
// question(teacher) -> calls the teachers answer method
// Teacher
// teach(student) -> calls the students learn method
// answer()
class Teacher {
  private teachName: string;
  private answer: string;
  constructor(name: string, answer: string) {
    this.teachName = name;
    this.answer = answer;
  }
  teach(student: Student) {
    student.learn();
  }
  answerTo() {
    console.log(`${this.teachName} válasza: ${this.answer}`);
  }
}
class Student {
  private studName: string;
  private xp: number;
  constructor(name: string, xp?: number) {
    this.studName = name;
    if (xp === undefined) {
      this.xp = 0;
    } else {
      this.xp = xp;
    }
  }
  learn() {
    this.xp += 1;
  }
  question(teacher: Teacher, question: string) {
    console.log(`${this.studName} kérdezi, hogy: ${question}`);
    teacher.answerTo();
  }
}
let istván: Teacher = new Teacher('István', 'error 404 - teacher not here');
let balázs: Teacher = new Teacher('Balázs', '*smile* Ahh it\'s easy');
let bence: Teacher = new Teacher('Bence', 'Rozé válaszolnál kérlek?');

let stud1: Student = new Student('Erika');
let stud2: Student = new Student('Józsi', 10);
let stud3: Student = new Student('Feri', 3);

stud2.question(istván, 'Tudod azt hogy?');
stud3.question(balázs, 'Hogy is volt az a rész hogy?');
