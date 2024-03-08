// Input three numbers from the user. Write a program to find the largest number out of three numbers using the ternary operator.

let num1 = parseInt(prompt("Enter first number: "));
let num2 = parseInt(prompt("Enter Second number: "));
let num3 = parseInt(prompt("Enter Third number: "));

const result =
  num1 > num2 && num1 > num3 ? num1 : num2 > num1 && num2 > num3 ? num2 : num3;
console.log(result);