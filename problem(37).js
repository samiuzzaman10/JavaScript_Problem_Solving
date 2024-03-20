// Take a year of input from the user ‍and how can you determine whether a year is a leap year?

let year = parseInt(prompt("Enter a year: "));

function isLeapYear(year) {
    if(year % 400 === 0 || year % 4 === 0 && year % 100 != 0) {
        console.log(`${year} is Leap Year.`);
    } else {
        console.log(`${year} is not Leap Year`);
    }
}
isLeapYear(year);
