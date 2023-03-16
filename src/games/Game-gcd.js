import startGame from '../index.js';
import { getNod, getRandomInt } from '../helpers.js';

const descriptionGame = 'Find the greatest common divisor of given numbers.';
const gcdData = () => {
  const random = getRandomInt();
  const random2 = getRandomInt();
  const question = `${random} ${random2}`;
  const maxDivisorRandom = getNod(random, random2);
  return [question, String(maxDivisorRandom)];
};
export default function startGcdGame() {
  startGame(descriptionGame, gcdData);
}
