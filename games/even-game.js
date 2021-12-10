import startGame from '../scr/index.js';
import getRandomNumber from '../scr/getRandomNumber.js';

const gameQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEvan = (number) => (number % 2 === 0);

const gameInfo = () => {
  const question = getRandomNumber(1, 100);
  const answer = isEvan(question) ? 'yes' : 'no';
  return [question, answer];
};
const brainEvan = () => startGame(gameQuestion, gameInfo);
export default brainEvan;
