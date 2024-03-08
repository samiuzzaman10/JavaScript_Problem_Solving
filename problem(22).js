// Enter a number from the user. Write a program to find whether a number is positive, negative, or zero

let number = parseInt(prompt("Enter a number: "));

const result =
  number == 0
    ? number + " is zero"
    : number > 0
    ? number + " is positive"
    : number + " is negative";
console.log(result);
