import startGame, { roundCount } from '../index.js';
import getRandomNumber from '../helpers/getRandomNumber.js';

const description = 'Find the greatest common divisor of given numbers.';

const getCommonDivisor = (num1, num2) => {
  const iter = (d) => {
    if (num1 % d === 0 && num2 % d === 0) {
      return d;
    }
    return iter(d - 1);
  };
  return iter(num1);
};

const rounds = () => {
  const result = [];
  for (let i = 1; result.length < roundCount; i += 1) {
    const num1 = getRandomNumber(1, 100);
    const num2 = getRandomNumber(1, 100);
    const question = `${num1} ${num2}`;
    const answer = String(getCommonDivisor(num1, num2));
    result.push([question, answer]);
  }
  return result;
};

const brainGcd = () => {
  const gameRounds = rounds();
  startGame(description, gameRounds);
};

export default brainGcd;
