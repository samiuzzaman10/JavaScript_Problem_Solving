// Write a javascript function that accepts a string and calculates the number of uppercase letter and lowercase latters.

const letter = "My Name is Samiuzzaman RAHAT";

let uppercaseLetter = 0;
let lowercaseLetter = 0;

function calculateString(text) {
  for (let i = 0; i < letter.length; i++) {
    console.log(text[i]);
    if (text[i] >= "A" && text[i] <= "Z") {
        uppercaseLetter += 1;
    } else {
        lowercaseLetter += 1;
    }
  }
}
calculateString(letter);

console.log(`Uppercase Letter = ${uppercaseLetter}
Lowercase Letter = ${lowercaseLetter}`);
