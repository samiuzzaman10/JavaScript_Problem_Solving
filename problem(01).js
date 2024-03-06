// Get first name, last name form user and print fullname.
let fName = prompt("Enter First Name: ");
let lName = prompt("Enter Last Name: ");
let fullName = fName + lName;
console.log(fullName);

// print Total length of full name
let len = fullName.length;
console.log(len);

// Convert full name into uppercase
let upper = fullName.toUpperCase();
console.log(upper);

// print the 2nd position from full name
let secendvalue = fullName.slice(1, 2);
console.log(secendvalue);
