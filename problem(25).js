// Write a javascript function to find Max of three numbers.

function maxNumber(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
}
result = maxNumber(1, 2, 3);
console.log(result);