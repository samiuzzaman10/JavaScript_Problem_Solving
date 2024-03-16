// Write a javascript function to sum all the numbers in a Array

function sumFunction(n) {
  let sum = 0;
  for (i = 0; i < 5; i++) {
    sum = sum + n[i];
  }
  return sum;
}
let numbers = [1, 2, 3, 4, 5];
let result = sumFunction(numbers);
console.log(result);


