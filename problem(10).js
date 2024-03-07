// Input a letter and check it is vowel or consonant using switch

let letter = prompt("Enter a letter: ");
    letter = letter.toLocaleLowerCase()

switch(letter) {
    case "a":
        console.log("Vowel");
        break;
    case "e":
        console.log("Vowel");
        break;
    case "i":
        console.log("Vowel");
        break;
    case "o":
        console.log("Vowel");
        break;
    case "u":
        console.log("Vowel")
        break;
    default:
        console.log("Consonant");
}