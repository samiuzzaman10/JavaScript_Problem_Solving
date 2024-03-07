/* Input first number and second number form user. 
output: 20 + 10 = 30
        20 - 10 = 10
        20 * 10 = 200
        20 / 10 = 20
        20 % 10 = 0
*/
let firstNumber = prompt("Enter first number: ");
let lastNumber = prompt("Enter Last number: ");

    firstNumber = parseInt(firstNumber);
    lastNumber = parseInt(lastNumber);

let sum = firstNumber + lastNumber;
let sub = firstNumber - lastNumber;
let mul = firstNumber * lastNumber;
let div = firstNumber / lastNumber;
let rem = firstNumber % lastNumber;

console.log(firstNumber + " + " + lastNumber + " = " + sum)
console.log(firstNumber + " - " + lastNumber + " = " + sub)
console.log(firstNumber + " * " + lastNumber + " = " + mul)
console.log(firstNumber + " / " + lastNumber + " = " + div)
console.log(firstNumber + " % " + lastNumber + " = " + rem)