const getRandomOperation = (Bot, Top, arr) => arr[Math.floor(Math.random() * (Top - Bot + 1)) + Bot];
const getRandomElement = (array) => {
  return getRandomOperation(0, array.length - 1, array);
};
const getNod = (a, b) => {
  let t = a;
  let c = b;
  while (t !== c) {
    if (t > c) {
      t -= c;
    } else {
      c -= t;
    }
  }
  return t;
};
const getProgressionRandom = (a, b) => {
  let n = 1;
  let elementProgression = a + b;
  const result = [a, elementProgression];
  while (n < 9) {
    elementProgression += b;
    result.push(elementProgression);
    n += 1;
  }
  return result;
};
function getRandomInt(minValue = 1, maxValue = 100) {
  const min = Math.ceil(minValue);
  const max = Math.ceil(maxValue);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandomPrime(randomNum) {
  const counter = 10;
  let counter2 = 0;
  for (let i = 2; i <= counter; i += 1) {
    if (randomNum === i) {
      counter2 += 0;
    } else if (randomNum % i === 0) {
      counter2 += 1;
    }
  }
  return counter2;
}
export {
  getRandomElement, getNod, getProgressionRandom, getRandomInt, getRandomPrime,
};
