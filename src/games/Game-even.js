import startGame from '../index.js';
import { getRandomInt } from '../helpers.js';

const descriptionGame = 'Answer "yes" if the number is even, otherwise answer "no".';
const gameEvenData = () => {
  const answer = ['yes', 'no'];
  const question = getRandomInt();
  if (question % 2 === 0) {
    return [question, answer[0]];
  } if (question % 2 === 1) {
    return [question, answer[1]];
  }
  return false;
};
export default function evenGame() {
  startGame(descriptionGame, gameEvenData);
}
