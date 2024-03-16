// Create a function called highestRunScorer that will receive a 2Dimensional array called players info, based on highest score, return the name of the player?

let scores = [
  ["Steve Smith", 50],
  ["Jos Buttler", 95],
  ["Glenn Maxwell", 145],
  ["David Warner", 85],
  ["Shakib Al Hasan", 85],
];

let highestScorer = scores[0][0];
let highestScore = scores[0][1];

function highestRunScorer(score) {
  for (let i = 1; i < scores.length; i++) {
    if (highestScore < score[i][1]) {
        highestScore = score[i][1];
        highestScorer = score[i][0];
    }
  }
  return highestScorer;
}
let result = highestRunScorer(scores);
console.log(result);
