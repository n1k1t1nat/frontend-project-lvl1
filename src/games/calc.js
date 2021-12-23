import playGame, { roundsCount } from '../index.js';
import getRandomNumber from '../helpers/getRandomNumber.js';

const description = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const calculate = () => {
  const num1 = getRandomNumber(1, 30);
  const num2 = getRandomNumber(1, 30);
  const randomIndex = getRandomNumber(0, operators.length);
  const operator = operators[randomIndex];
  let answer;
  switch (operator) {
    case '*':
      answer = num1 * num2;
      break;
    case '-':
      answer = num1 - num2;
      break;
    case '+':
      answer = num1 + num2;
      break;
    default:
      return Error('Incorrect operator');
  }
  const question = `${num1} ${operator} ${num2}`;
  return [question, String(answer)];
};

export default () => {
  const gameRounds = [];
  for (let i = 1; gameRounds.length < roundsCount; i += 1) {
    gameRounds.push(calculate());
  }
  playGame(description, gameRounds);
};
