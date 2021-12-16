import startGame from '../index.js';
import getRandomNumber from '../helpers/getRandomNumber.js';
import getRandomElementFromArray from '../helpers/getRandomElement.js';

const description = 'What is the result of the expression?';
const roundCount = 3;

const operators = ['+', '-', '*'];

// eslint-disable-next-line consistent-return
const calculateResult = (operator, num1, num2) => {
  switch (operator) {
    case '*':
      return num1 * num2;
    case '-':
      return num1 - num2;
    case '+':
      return num1 + num2;
    default:
      break;
  }
};

const rounds = () => {
  const result = [];
  for (let i = 1; result.length < roundCount; i += 1) {
    const num1 = getRandomNumber(1, 30);
    const num2 = getRandomNumber(1, 30);
    const operator = getRandomElementFromArray(operators);
    const question = `${num1} ${operator} ${num2}`;
    const answer = String(calculateResult(operator, num1, num2));
    result.push([question, answer]);
  }
  return result;
};

const brainCalc = () => {
  const gameRounds = rounds();
  startGame(description, gameRounds);
};

export default brainCalc;
