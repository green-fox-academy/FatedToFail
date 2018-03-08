'use strict';
import { test } from 'tape';
import { countLetters } from './04-count_letters';

test('count letters in a string and return and object with them', t => {
  t.deepEqual(countLetters('aabbbcccc'), {a: 2, b: 3, c: 4});
  t.deepEqual(countLetters('aa000cccc'), {a: 2, '0': 3, c: 4});
  t.deepEqual(countLetters(undefined), {});
  t.deepEqual(countLetters(1122333), {});
  t.deepEqual(countLetters(null), {});
  t.deepEqual(countLetters(true), {});
  t.end();
});