'use strict';

export function anagramChecker(srt1: string, str2: string): boolean {
  try{
    return srt1 === str2.split('').reverse().join('');
  } catch {
    return false;
  }
}