// Determine wheather a number is greater than 50 and smaller than 60

let wheather = parseInt(prompt("Enter a number: "));
if (wheather >= 50 && wheather <=60) {
    console.log(wheather + " is greater then 50 and smaller than 60");
} else {
    if(wheather <50) {
        console.log(wheather + " is smaller than 50");
    } else {
        console.log(wheather + " is greater than 60")
    }
}