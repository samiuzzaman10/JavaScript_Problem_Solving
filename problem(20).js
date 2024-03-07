// Display Fibonacci series up to 10 terms
function fibonacci(x) {
  var a = 0;
  var b = 1;
  console.log(a);
  console.log(b);

  var sum = 0;
  for (i = 1; i <= x; i++) {
    sum = a + b
    c = a + b;
    a = b;
    b = c;
    console.log(sum);
  }
}
fibonacci(10);
