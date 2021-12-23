import playGame, { roundsCount } from '../index.js';
import getRandomNumber from '../helpers/getRandomNumber.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = () => {
  const question = getRandomNumber(1, 100);
  let answer;
  if (question % 2 === 0) {
    answer = 'yes';
  } else {
    answer = 'no';
  }
  return [question, answer];
};

export default () => {
  const gameRounds = [];
  for (let i = 1; gameRounds.length < roundsCount; i += 1) {
    gameRounds.push(isEven());
  }
  playGame(description, gameRounds);
};
