// How can we print 1 to 6 numbers randomly in the Ludo game

function getRandomNumber(min, max) {
  let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
}
const result = getRandomNumber(1, 6);
console.log(result);
