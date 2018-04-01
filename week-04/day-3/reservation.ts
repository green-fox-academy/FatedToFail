'use strict';

interface Reservationy {
  getDowBooking(): string;
  getCodeBooking(): string;
}

class Reservation implements Reservationy {
  private dayNames: string[] = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  private chars: string = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  getDowBooking(): string {
    return this.dayNames[Math.floor(Math.random() * 6)]
  };
  getCodeBooking(): string {
    let outPut: string = '';
    for(let i: number = 0; i < 8; i++) {
      outPut += this.chars.charAt(Math.floor(Math.random() * this.chars.length))
    }
    return outPut;
  }

  bookEm(): string {
    return `Booking# ${this.getCodeBooking()} for ${this.getDowBooking()}`;
  };
}

let reservation: Reservation = new Reservation();

let bookings: string[] = [];
for(let i: number = 0; i < 50; i++) {
  bookings.push(reservation.bookEm())
}

console.log(bookings);