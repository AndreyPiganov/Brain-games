#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {
  name2, min, max, ProgressionRandom,
} from '../src/index.js';

let count = 0;
console.log('What number is missing in the progression?');
while ((count <= 2) && (count >= -5)) {
  const random = Math.floor(Math.random() * (max - min + 1) + min);
  const random2 = Math.floor(Math.random() * (max - min + 1) + min);
  const result = ProgressionRandom(random, random2);
  const ElementRandom = Math.floor(Math.random() * ((result.length - 1) - 1 + 1) + 1);
  const ElementSlice = result.slice(ElementRandom, ElementRandom + 1);
  if (result.length === 10) {
    result.splice(ElementRandom, 1, '..');
  }
  console.log(`Question: ${result.join(' ')}`);
  const answer = readlineSync.question('Your answer:');
  if (ElementSlice[0] === Number(answer)) {
    console.log('Correct!');
    count += 1;
  } else {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${ElementSlice[0]}".`);
    count -= 10;
    console.log(`Let's try again,${name2}`);
  }
  if (count === 3) {
    console.log(`Congratulations,${name2}`);
  }
}
