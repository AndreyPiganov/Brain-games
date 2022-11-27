#!/usr/bin/env node
import readlineSync from 'readline-sync';
import UserHello from '../src/cli.js';

console.log('Welcome to the Brain Games!');
let count = 0;
const text = `My name:${UserHello()}`;
const array = text.split(',');
const name2 = array[array.length - 1];
console.log('Hello, ' + name2);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
while ((count <= 2) && (count >= -5)) {
  const min = 1;
  const max = 100;
  const random = Math.floor(Math.random() * (max - min + 1) + min);
  console.log(`Question: ${random}`);
  const answer = readlineSync.question('Your answer: ');
  if ((random % 2 === 0) && (answer === 'yes')) {
    console.log('Correct!');
    count += 1;
  } else if ((random % 2 === 0) && (answer === 'no')) {
    console.log('"no" is wrong answer ;(. Correct answer was "yes".');
    count -= 10;
    console.log(`Let's try again, ${name2}`);
  } else if (random % 2 === 1 && answer === 'yes') {
    console.log('"yes" is wrong answer ;(. Correct answer was "no".');
    count -= 10;
    console.log(`Let's try again,${name2}`);
  } else if (random % 2 === 1 && answer === 'no') {
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
