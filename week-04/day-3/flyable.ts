'use strict';
import { Animal } from './zoo';

interface Flyable {
  land();
  fly();
  takeoff();
}

abstract class Vehicle {
  name: string;
  type: string;
  kmFromFirstStart: number;
}

class Helicopter extends Vehicle implements Flyable {
  land() {};
  fly() {};
  takeoff() {};
}

class Bird extends Animal implements Flyable {
  breed() {return ''};
  fly() {};
  takeoff() {};
  land() {};
}