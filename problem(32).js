// Create a function called highestScore that will receive a 1dimensional array called scors and return the highest score.

let scores = [50, 30, 60, 43, 15];

function highestScore(hSchore) {
    let max = scores[0];
    for (let i= 1; i < scores.length;i++){
        if ( max < hSchore[i]) {
            max = hSchore[i];
        }
    }
    return max
}

let result = highestScore(scores);
console.log(result);
