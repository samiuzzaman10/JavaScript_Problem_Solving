// Take input letter and check whether letter is vowel or consonant

let lette = prompt("Enter a letter");
let letter = lette.toUpperCase();
if (letter == "A" || letter == "E" || letter == "I" || letter == "O" || letter == "U") {
    console.log("Vowel");
} else {
    console.log("Consonant");
}