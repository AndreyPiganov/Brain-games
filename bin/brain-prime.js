#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { name2, min, max } from '../src/index.js';

let count = 0;
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
while ((count <= 2) && (count >= -5)) {
  const random = Math.floor(Math.random() * (max - min + 1) + min);
  console.log(`Question: ${random}`);
  const answer = readlineSync.question('Your answer: ');
  const counter = 10;
  let counter2 = 0;
  for (let i = 2; i <= counter; i += 1) {
    if (random === i) {
      counter2 += 0;
    } else if ((random % i === 0)) {
      counter2 += 1;
    }
  }
  if ((random === 1) && (answer === 'yes')) {
    console.log('"yes" is wrong answer ;(. Correct answer was "no".');
    count -= 10;
    console.log(`Let's try again, ${name2}`);
  } else if ((random === 1) && (answer === 'no')) {
    console.log('Correct!');
    count += 1;
  } else if ((counter2 === 0) && (answer === 'yes')) {
    console.log('Correct!');
    count += 1;
  } else if ((counter2 === 0) && (answer === 'no')) {
    console.log('"no" is wrong answer ;(. Correct answer was "yes".');
    count -= 10;
    console.log(`Let's try again, ${name2}`);
  } else if ((counter2 !== 0) && (answer === 'yes')) {
    console.log('"yes" is wrong answer ;(. Correct answer was "no".');
    count -= 10;
    console.log(`Let's try again, ${name2}`);
  } else if ((counter2 !== 0) && (answer === 'no')) {
    console.log('Correct!');
    count += 1;
  } else {
    count -= 10;
    console.log('Something went wrong :)');
  }
  if (count === 3) {
    console.log(`Congratulations,${name2}`);
  }
}
