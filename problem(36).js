// How can we arrange the roll numbers of everyone in our classroom in order?

const rollNumber = [5, 3, 10, 8, 1, 6, 9, 4, 7, 2];
rollNumber.sort(function (a, b) {
  return a - b;
});
console.log(rollNumber);