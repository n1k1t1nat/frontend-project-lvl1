import startGame, { roundCount } from '../index.js';
import getRandomNumber from '../helpers/getRandomNumber.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  let divider = 2;
  while (divider <= number / 2) {
    if (number % divider === 0) {
      return false;
    }
    divider += 1;
  }
  return true;
};

const rounds = () => {
  const result = [];
  for (let i = 1; result.length < roundCount; i += 1) {
    const question = getRandomNumber(1, 100);
    const answer = isPrime(question) ? 'yes' : 'no';
    result.push([question, answer]);
  }
  return result;
};

const brainPrime = () => {
  const gameRounds = rounds();
  startGame(description, gameRounds);
};

export default brainPrime;
