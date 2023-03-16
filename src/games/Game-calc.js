import { getRandomElement, getRandomInt } from '../helpers.js';
import startGame from '../index.js';

const descriptionGame = 'What is the result of the expression?';
const calcData = () => {
  let answer = 0;
  const random = getRandomInt();
  const random2 = getRandomInt();
  const answers = ['+', '-', '*'];
  const randomOperator = getRandomElement(answers).slice(0, 1);
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
export default function startCalcGame() {
  startGame(descriptionGame, calcData);
}
