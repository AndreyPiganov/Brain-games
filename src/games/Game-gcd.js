import startGame from '../index.js';
import { NOD, getRandomInt } from '../helpers.js';

const descriptionGame = 'Find the greatest common divisor of given numbers.';
const GameGcdData = () => {
  const random = getRandomInt();
  const random2 = getRandomInt();
  const question = `${random} ${random2}`;
  const MaxDivisorRandom = NOD(random, random2);
  return [question, String(MaxDivisorRandom)];
};
export default function gcdGame() {
  startGame(descriptionGame, GameGcdData);
}
