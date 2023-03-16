import startGame from '../index.js';
import {
  progressionRandom, getRandomInt,
} from '../helpers.js';

const descriptionGame = 'What number is missing in the progression?';
const gameProgressionData = () => {
  const random = getRandomInt();
  const random2 = getRandomInt();
  const result = progressionRandom(random, random2);
  const elementRandom = Math.floor(Math.random() * ((result.length - 1) - 1 + 1) + 1);
  const answer = result.slice(elementRandom, elementRandom + 1);
  if (result.length === 10) {
    result.splice(elementRandom, 1, '..');
  }
  const question = result.join(' ');
  return [question, String(answer)];
};
export default function progressionGame() {
  startGame(descriptionGame, gameProgressionData);
}
