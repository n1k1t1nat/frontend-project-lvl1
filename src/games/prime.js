import playGame, { roundsCount } from '../index.js';
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

const makeRound = () => {
  const question = getRandomNumber(1, 100);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => {
  const gameRounds = [];
  for (let i = 1; gameRounds.length < roundsCount; i += 1) {
    gameRounds.push(makeRound());
  }
  playGame(description, gameRounds);
};
