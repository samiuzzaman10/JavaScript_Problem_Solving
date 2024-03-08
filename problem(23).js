// Create a calculator that can add, subtract, multiply, and quotient.

let num1 = parseInt(prompt("Enter first number: "));
let num2 = parseInt(prompt("Enter second number: "));

function addition(a, b) {
    let addi = a + b;
    return addi
}
function subtract(a, b) {
    let sub = a - b;
    return sub
}
function multiply(a, b) {
    let mul = a * b;
    return mul
}
function division(a, b) {
  let div = a / b;
  return div;
}
function reminder(a, b) {
  let rem = a % b;
  return rem;
}

add = addition(num1, num2);
console.log(num1 + " + " + num2 + " = " + add);

sub = subtract(num1, num2);
console.log(num1 + " - " + num2 + " = " + sub);

mul = multiply(num1, num2);
console.log(num1 + " * " + num2 + " = " + mul);

div = division(num1, num2);
console.log(num1 + " / " + num2 + " = " + div);

rem = reminder(num1, num2);
console.log(num1 + " % " + num2 + " = " + rem);