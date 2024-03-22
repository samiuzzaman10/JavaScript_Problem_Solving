// Write a javascript function to multiply all the numbers in a list.
const score = [5, 7, 3, 9, 4];
let mul = 1;
function multiplyFunc(n) {
  for (let i = 0; i < score.length; i++) {
    mul = mul * n[i];
  }
  return mul;
}
const result = multiplyFunc(score);
console.log(result);