'use strict';
import { test } from 'tape';
import { Apple } from "./01-apples";

test('return apple', t => {
  let test: Apple = new Apple();

  t.equal(test.getApple(), 'it is an apple');
  t.end();
});