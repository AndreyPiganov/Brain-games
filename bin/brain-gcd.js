#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {
  name2, min, max, NOD,
} from '../src/index.js';

let count = 0;
console.log('Find the greatest common divisor of given numbers.');
while ((count <= 2) && (count >= -5)) {
  const random = Math.floor(Math.random() * (max - min + 1) + min);
  const random2 = Math.floor(Math.random() * (max - min + 1) + min);
  console.log(`Question: ${random} ${random2}`);
  const answer = readlineSync.question('Your answer:');
  const MaxDivisorRandom = NOD(random, random2);
  if (MaxDivisorRandom == answer) {
    console.log('Correct!');
    count += 1;
  } else {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${MaxDivisorRandom}".`);
    count -= 10;
    console.log(`Lets try again,${name2}`);
  }
  if (count === 3) {
    console.log(`Congratulations,${name2}`);
  }
}
