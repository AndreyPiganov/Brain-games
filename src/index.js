import UserHello from './cli.js';

console.log('Welcome to the Brain Games!');
const text = `My name:${UserHello()}`;
const array = text.split(',');
const name2 = array[array.length - 1];
const min = 1;
const max = 100;
console.log(`Hello,${name2}`);
const RandomElement = (array) => {
  const RandomOperation = (Bot, Top, arr) => arr[Math.floor(Math.random() * (Top - Bot + 1)) + Bot];
  return RandomOperation(0, array.length - 1, array);
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
const ProgressionRandom = (a,b) => {
let n = 1;
let ElementProgression = a + b;
let result = [a,ElementProgression];
while (n < 9){
        ElementProgression += b;
        result.push(ElementProgression);
        n+=1;
}
return result;
}
export {
  name2, min, max, RandomElement, NOD, ProgressionRandom,
};
