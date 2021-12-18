import startGame, { roundCount } from '../index.js';
import getRandomNumber from '../helpers/getRandomNumber.js';
import getRandomElementFromArray from '../helpers/getRandomElement.js';

const description = 'What number is missing in the progression?';

const getProgression = (firstElement, step, length) => {
  const progression = [];
  for (let i = firstElement; progression.length < length; i += step) {
    progression.push(i);
  }
  return progression;
};

const rounds = () => {
  const result = [];
  for (let i = 1; result.length < roundCount; i += 1) {
    const firsElement = getRandomNumber(1, 20);
    const step = getRandomNumber(2, 6);
    const length = getRandomNumber(5, 11);
    const progression = getProgression(firsElement, step, length);
    const randomElement = getRandomElementFromArray(progression);
    const index = progression.indexOf(randomElement);
    const symbol = '..';
    progression[index] = symbol;
    const question = `${progression.join(' ')}`;
    const answer = String(randomElement);
    result.push([question, answer]);
  }
  return result;
};

const brainProgression = () => {
  const gameRounds = rounds();
  startGame(description, gameRounds);
};

export default brainProgression;
