// Write a javascript function to sum all the numbers in a Array

function myFunction(n) {
    let sum = 0;
    for (let i = 0; i <= 4; i++) {
        sum = sum + n[i];
    }
    return sum
}

let numbers = [1, 2, 3, 4, 5];
result = myFunction(numbers);
console.log(result)