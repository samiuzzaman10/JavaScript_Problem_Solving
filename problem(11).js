// Write a Program that will print sum of all the number that are divisible by 3 and 5 from 1 - 100

let sum = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    sum = sum + i;
  }
}
console.log(sum);
