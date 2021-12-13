const getRandomElementFromArray = (array) => {
  const randomElement = Math.random() * array.length;
  return array[Math.floor(randomElement)];
};

export default getRandomElementFromArray;
