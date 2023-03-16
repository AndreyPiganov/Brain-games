import startGame from '../index.js';
import { nod, getRandomInt } from '../helpers.js';

const descriptionGame = 'Find the greatest common divisor of given numbers.';
const gameGcdData = () => {
  const random = getRandomInt();
  const random2 = getRandomInt();
  const question = `${random} ${random2}`;
  const MaxDivisorRandom = nod(random, random2);
  return [question, String(MaxDivisorRandom)];
};
export default function gcdGame() {
  startGame(descriptionGame, gameGcdData);
}
