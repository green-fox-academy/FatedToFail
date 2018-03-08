'use strict';
import { test } from 'tape';
import { anagramChecker } from './03-anagram';

test('check 2 input if they\'re anagrams?', t => {
  t.equal(anagramChecker('hay', 'yah'), true);
  t.equal(anagramChecker('hay', 'hay'), false);
  t.equal(anagramChecker('hay', '0134'), false);
  t.equal(anagramChecker('hay', ), false);
  t.equal(anagramChecker('hay', 13), false);
  t.equal(anagramChecker(31, 13), false);
  t.equal(anagramChecker(undefined, null), false);
  t.equal(anagramChecker(undefined, NaN), false);
  t.end();
});