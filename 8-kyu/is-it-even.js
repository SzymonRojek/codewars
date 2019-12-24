



// Is it even?

/*  In this Kata we are passing a number (n) into a function.
Your code will determine if the number passed is even (or not).
The function needs to return either a true or false.
Numbers may be positive or negative, integers or floats.  */

// My answer:

const testEven = n => {
  if(n % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

testEven(3);


// Another methods:

1. 
function testEven(n) {
  return n % 2 === 0 ? true : false;
}


2.
const testEven = n => !(n % 2);


3.
function testEven2(n) {
  return !(n % 2);
}


