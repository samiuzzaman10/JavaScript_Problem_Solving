// Write a javascript funtion to calculate the factorial of a number (a non-negative integer). The function accepts the number as an argument.

function factorialize(num) {
  if (num === 0 || num === 1) return 1;
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}
const result = factorialize(5);
console.log(result);