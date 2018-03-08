'use strict';

export function anagramChecker(srt1: string, str2: string): boolean {
  return srt1 === str2.split('').reverse().join('');
}