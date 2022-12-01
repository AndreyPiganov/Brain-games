#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {
  name2, min, max, RandomElement,
} from '../src/index.js';

let count = 0;
let result = 0;
console.log('What is the result of the expression?');
while ((count <= 2) && (count >= -5)) {
  const random = Math.floor(Math.random() * (max - min + 1) + min);
  const random2 = Math.floor(Math.random() * (max - min + 1) + min);
  const answers = ['+', '-', '*'];
  const randomOperator = RandomElement(answers).slice(0, 1);
  console.log(`Question: ${random} ${randomOperator} ${random2}`);
  const answer = readlineSync.question('Your answer:');
  if (randomOperator === '+') {
    result = random + random2;
  } else if (randomOperator === '-') {
    result = random - random2;
  } else if (randomOperator === '*') {
    result = random * random2;
  }
  if (result == answer) {
    count += 1;
    console.log('Correct!');
  } else {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${result}".`);
    count -= 10;
    console.log(`Lets try again,${name2}`);
  }
  if (count === 3) {
    console.log(`Congratulations,${name2}`);
  }
}
