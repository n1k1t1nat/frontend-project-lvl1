import playGame, { roundsCount } from '../index.js';
import getRandomNumber from '../helpers/getRandomNumber.js';

const description = 'Find the greatest common divisor of given numbers.';

const getCommonDivisor = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const iter = (d) => {
    if (num1 % d === 0 && num2 % d === 0) {
      return d;
    }
    return iter(d - 1);
  };
  const question = `${num1} ${num2}`;
  const answer = String(iter(num1));
  return [question, answer];
};

export default () => {
  const gameRounds = [];
  for (let i = 1; gameRounds.length < roundsCount; i += 1) {
    gameRounds.push(getCommonDivisor());
  }
  playGame(description, gameRounds);
};
