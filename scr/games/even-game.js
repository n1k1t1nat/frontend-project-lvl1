import startGame from '../index.js';
import getRandomNumber from '../helpers/getRandomNumber.js';

const isEven = (number) => (number % 2 === 0);

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const roundCount = 3;

const rounds = () => {
  const result = [];
  for (let i = 1; result.length < roundCount; i += 1) {
    const question = getRandomNumber(1, 100);
    const answer = isEven(question) ? 'yes' : 'no';
    result.push([question, answer]);
  }
  return result;
};

const brainEven = () => {
  const gameRounds = rounds();
  startGame(description, gameRounds);
};

export default brainEven;
