// Write a javascript function to reverse a string.
let fruits = ["Coconut", "Apple", "dates", "Banana"];
function reverseString(str) {
    str.sort();
    str.reverse();
} 
const result = reverseString(fruits);
console.log(fruits);