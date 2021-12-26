import playGame, { roundsCount } from '../index.js';
import getRandomNumber from '../helpers/getRandomNumber.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0);

const makeRound = () => {
  const question = getRandomNumber(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => {
  const gameRounds = [];
  for (let i = 1; gameRounds.length < roundsCount; i += 1) {
    gameRounds.push(makeRound());
  }
  playGame(description, gameRounds);
};
