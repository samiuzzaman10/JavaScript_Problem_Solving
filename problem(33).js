// Find the Second Largest Number in Array Javascript
let numbers = [46, 25, 60, 55, 70, 30];
let largestNumber = numbers[0];
let secondLargeNumber = numbers[0];

function secondLargestNumber() {
  for (let i = 0; i < numbers.length; i++) {
    if (largestNumber < numbers[i]) {
      secondLargeNumber = largestNumber;
      largestNumber = numbers[i];
    } else if (secondLargeNumber < numbers[i]) {
      secondLargeNumber = numbers[i];
    }
  }
  return secondLargeNumber;
}

let result = secondLargestNumber(numbers);
console.log(result);
