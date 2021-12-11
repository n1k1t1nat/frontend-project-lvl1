import startGame from '../scr/index.js';
import getRandomNumber from '../scr/getRandomNumber.js';
import getRandomElement from '../scr/getRandomElement.js';

const gameQuestion = 'What number is missing in the progression?';

const getProgression = (firstElement, step, length) => {
  const progression = [];
  for (let i = firstElement; progression.length < length; i += step) {
    progression.push(i);
  }
  return progression;
};

const gameInfo = () => {
  const firsElement = getRandomNumber(1, 20);
  const step = getRandomNumber(2, 6);
  const length = getRandomNumber(5, 11);
  const progression = getProgression(firsElement, step, length);
  const randomElement = getRandomElement(progression);
  const index = progression.indexOf(randomElement);
  const symbol = '..';
  progression[index] = symbol;
  const question = `${progression.join(' ')}`;
  const answer = String(randomElement);
  return [question, answer];
};

const brainProgression = () => startGame(gameQuestion, gameInfo);

export default brainProgression;
