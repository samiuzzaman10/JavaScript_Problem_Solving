// How to determine the number of vowels in a sentence?

let sentence = "I love Bangladesh";
const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

function countVowels(sentence) {
  let count = 0;
  const letters = Array.from(sentence);
  letters.forEach(function (value) {
    if(vowels.includes(value)){
        count++;
    }
  });
  return count;
}

const result = countVowels(sentence);
console.log(result);
