import { randomElement, getRandomInt } from '../helpers.js';
import startGame from '../index.js';

const descriptionGame = 'What is the result of the expression?';
const gameCalcData = () => {
  let answer = 0;
  const random = getRandomInt();
  const random2 = getRandomInt();
  const answers = ['+', '-', '*'];
  const randomOperator = randomElement(answers).slice(0, 1);
  const question = `${random} ${randomOperator} ${random2}`;
  if (randomOperator === '+') {
    answer = random + random2;
  } else if (randomOperator === '-') {
    answer = random - random2;
  } else if (randomOperator === '*') {
    answer = random * random2;
  }
  return [question, String(answer)];
};
export default function calcGame() {
  startGame(descriptionGame, gameCalcData);
}
