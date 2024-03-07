 // Input two numbers and print their sum only if the sum is greater than 100

let num1 = parseInt(prompt("Enter First Number: "));
let num2 = parseInt(prompt("Enter Last Number: "));
let sum = num1 + num2;

if (sum >= 100) {
    console.log(num1 + "+" + num2 + "=" + sum);
}