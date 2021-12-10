import startGame from '../scr/index.js';
import getRandomNumber from '../scr/getRandomNumber.js';

const gameQuestion = 'Find the greatest common divisor of given numbers.';

const getCommonDivisor = (num1, num2) => {
  if (num1 < num2) {
    let i = num1;
    while (num1 % i !== 0 || num2 % i !== 0) {
      i -= 1;
    }
    return i;
  }
  let i = num2;
  while (num2 % i !== 0 || num1 % i !== 0) {
    i -= 1;
  }
  return i;
};

const gameInfo = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const question = `${num1} ${num2}`;
  const answer = String(getCommonDivisor(num1, num2));
  return [question, answer];
};

const brainGcd = () => startGame(gameQuestion, gameInfo);

export default brainGcd;
