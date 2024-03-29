


/*
Convert a Number to a String!

We need a function that can transform a number into a string.

What ways of achieving this do you know?

Examples:
numberToString(123); // returns '123';`   
numberToString(999); // returns '999';`
*/


// 1

function numberToString(num) {
  return String(num);
}

console.log(numberToString(67)); // '67'



// 2

function numberToString(num) {
  return num + ''; 
}



// 3

function numberToString(num) {
  return num.toString();
}



// 4

const numberToString = num => `${num}`;