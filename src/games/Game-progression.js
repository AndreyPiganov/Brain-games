import startGame from '../index.js';
import {
  ProgressionRandom, getRandomInt,
} from '../helpers.js';

const descriptionGame = 'What number is missing in the progression?';
const GameProgressionData = () => {
  const random = getRandomInt();
  const random2 = getRandomInt();
  const result = ProgressionRandom(random, random2);
  const ElementRandom = Math.floor(Math.random() * ((result.length - 1) - 1 + 1) + 1);
  const answer = result.slice(ElementRandom, ElementRandom + 1);
  if (result.length === 10) {
    result.splice(ElementRandom, 1, '..');
  }
  const question = result.join(' ');
  return [question, String(answer)];
};
export default function progressionGame() {
  startGame(descriptionGame, GameProgressionData);
}
