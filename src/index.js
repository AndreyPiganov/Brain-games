import UserHello from './cli.js';

console.log('Welcome to the Brain Games!');
const text = `My name:${UserHello()}`;
const array = text.split(',');
const name2 = array[array.length - 1];
const min = 1;
const max = 100;
console.log(`Hello,${name2}`);
const RandomElement = () => {
  const answers = ['+', '-', '*'];
  const RandomOperation = (Bot, Top, arr) => arr[Math.floor(Math.random() * (Top - Bot + 1)) + Bot];
  return RandomOperation(0, answers.length - 1, answers);
};
const NOD = (a, b) => {
  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  return a;
};
export {
  name2, min, max, RandomElement, NOD,
};
