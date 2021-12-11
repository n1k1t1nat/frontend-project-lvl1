import startGame from '../scr/index.js';
import getRandomNumber from '../scr/getRandomNumber.js';

const gameQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  let dividor = 2;
  while (dividor <= number / 2) {
    if (number % dividor === 0) {
      return false;
    }
    dividor += 1;
  }
  return true;
};

const gameInfo = () => {
  const question = getRandomNumber(1, 100);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};
const brainPrime = () => startGame(gameQuestion, gameInfo);
export default brainPrime;
