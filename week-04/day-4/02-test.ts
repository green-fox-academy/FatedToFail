'use strict';
import { test } from 'tape';
import { Dunno } from './02-sum';

test('adding a number of array', t => {
  let arr: number[] = [1, 2, 3, 4, 5, 6, 7, 2];
  t.equal(new Dunno().sumEmAll(arr), 30);
  t.equal(new Dunno().sumEmAll([]), 0);
  t.equal(new Dunno().sumEmAll([1]), 1);
  t.equal(new Dunno().sumEmAll([null]), 0);
  t.equal(new Dunno().sumEmAll(['sdf']), 0);
  t.end();
});