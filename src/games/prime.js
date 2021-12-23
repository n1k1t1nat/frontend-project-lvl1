import playGame, { roundsCount } from '../index.js';
import getRandomNumber from '../helpers/getRandomNumber.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = () => {
  const question = getRandomNumber(1, 100);
  let answer = 'yes';
  if (question < 2) {
    answer = 'no';
  }
  for (let divider = 2; divider <= question / 2; divider += 1) {
    if (question % divider === 0) {
      answer = 'no';
    }
  }
  return [question, answer];
};

export default () => {
  const gameRounds = [];
  for (let i = 1; gameRounds.length < roundsCount; i += 1) {
    gameRounds.push(isPrime());
  }
  playGame(description, gameRounds);
};
