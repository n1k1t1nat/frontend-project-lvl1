import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

// eslint-disable-next-line import/prefer-default-export
export const evenGame = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`'Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const getRandomNumber = () => Math.floor((Math.random() * 100) + 1);
  for (let round = 1; round <= 3; round += 1) {
    const number = getRandomNumber();
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('You answer: ');
    if (number % 2 === 0) {
      if (userAnswer === 'yes') {
        console.log('Correct!');
      } else {
        console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "yes".\nLet's try again, ${userName}!`);
        return;
      }
    }
    if (number % 2 !== 0) {
      if (userAnswer === 'no') {
        console.log('Correct!');
      } else {
        console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "no".\nLet's try again, ${userName}!`);
        return;
      }
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
