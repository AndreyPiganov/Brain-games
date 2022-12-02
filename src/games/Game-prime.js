import startGame from '../index.js';
import { getRandomInt, getRandomPrime } from '../helpers.js';

const descriptionGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const GamePrimeData = () => {
  const answer = ['yes', 'no'];
  const question = getRandomInt();
  const indexPrime = getRandomPrime(question);
  if (indexPrime === 1) {
    return [question, answer[1]];
  }
  if (question === 1) {
    return [question, answer[1]];
  }
  if (indexPrime === 0) {
    return [question, answer[0]];
  }
  return false;
};
export default function primeGame() {
  startGame(descriptionGame, GamePrimeData);
}
