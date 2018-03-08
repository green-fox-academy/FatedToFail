'use strict';
import { test } from 'tape';
import { Dunno } from './02-sum';

let arr: number[] = [1, 2, 3, 4, 5, 6, 7, 2];

test('adding a number of array', t => {
  t.equal(new Dunno().sumEmAll(arr), 30);
  t.equal(new Dunno().sumEmAll([]), 0);
  t.equal(new Dunno().sumEmAll([1]), 1);
  t.equal(new Dunno().sumEmAll([1, 2, 'r', 'jgo', '1', 4]), 7);
  t.equal(new Dunno().sumEmAll([null]), 0);
  t.equal(new Dunno().sumEmAll(['sdf']), 0);
  t.equal(new Dunno().sumEmAll(null), 0);
  t.end();
});
