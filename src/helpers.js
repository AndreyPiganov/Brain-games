const RandomElement = (array) => {
  const RandomOperation = (Bot, Top, arr) => arr[Math.floor(Math.random() * (Top - Bot + 1)) + Bot];
  return RandomOperation(0, array.length - 1, array);
};
const NOD = (a, b) => {
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
const ProgressionRandom = (a, b) => {
  let n = 1;
  let ElementProgression = a + b;
  const result = [a, ElementProgression];
  while (n < 9) {
    ElementProgression += b;
    result.push(ElementProgression);
    n += 1;
  }
  return result;
};
function getRandomInt(minValue = 1, maxValue = 100) {
  const min = Math.ceil(minValue);
  const max = Math.ceil(maxValue);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandomPrime(random) {
  const counter = 10;
  let counter2 = 0;
  for (let i = 2; i <= counter; i += 1) {
    if (random === i) {
      counter2 += 0;
    } else if (random % i === 0) {
      counter2 += 1;
    }
  }
  return counter2;
}
export {
  RandomElement, NOD, ProgressionRandom, getRandomInt, getRandomPrime,
};
