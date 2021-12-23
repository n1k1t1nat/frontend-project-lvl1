import playGame, { roundsCount } from '../index.js';
import getRandomNumber from '../helpers/getRandomNumber.js';

const description = 'What number is missing in the progression?';

const getProgression = () => {
  const progression = [];
  const firstElement = getRandomNumber(1, 20);
  const step = getRandomNumber(2, 6);
  const length = getRandomNumber(5, 11);
  for (let i = firstElement; progression.length < length; i += step) {
    progression.push(i);
  }
  const randomIndex = getRandomNumber(0, progression.length);
  const symbol = '..';
  const hiddenElement = progression[randomIndex];
  progression[randomIndex] = symbol;
  const question = `${progression.join(' ')}`;
  const answer = String(hiddenElement);
  return [question, answer];
};

export default () => {
  const gameRounds = [];
  for (let i = 1; gameRounds.length < roundsCount; i += 1) {
    gameRounds.push(getProgression());
  }
  playGame(description, gameRounds);
};
