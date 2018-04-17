'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');

test('groot endpoint', (t) => {
  request(app)
    .get('/groot')
    .expect('Content-Type', /json/)
    .expect(400, {error: 'I am Groot!'})
    .end((err, res) => {
      t.error(err);
    });

  request(app)
    .get('/groot?message=Hello there')
    .expect('Content-Type', /json/)
    .expect(200, {recieved: 'Hello there', translated: 'I am Groot!'})
    .end((err, res) => {
      t.error(err);
    });
  
  request(app)
    .get('/yondu')
    .expect(400)
    .body({error: ''})

  request(app)
    .get('/yondu?distance=100&time=10')
    .expect('Content-Type', /json/)
    .expect(200, {distance: 100, time: 10, speed: 10})
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});
