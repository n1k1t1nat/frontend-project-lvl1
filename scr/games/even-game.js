import startGame from '../index.js';
import getRandomNumber from '../helpers/getRandomNumber.js';

const gameQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0);

const gameInfo = () => {
  const question = getRandomNumber(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};
const brainEven = () => startGame(gameQuestion, gameInfo);
export default brainEven;
