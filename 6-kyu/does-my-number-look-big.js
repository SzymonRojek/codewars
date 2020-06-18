


/*
Description:
A Narcissistic Number is a number which is the sum of its own digits, each raised to the power of the number of digits in a given base. 

In this Kata, we will restrict ourselves to decimal (base 10).

For example, take 153 (3 digits):

    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
and 1634 (4 digits):

    1^4 + 6^4 + 3^4 + 4^4 = 1 + 1296 + 81 + 256 = 1634
The Challenge:

Your code must return true or false depending upon whether the given number is a Narcissistic number in base 10.

Error checking for text strings or other invalid inputs is not required, 
only valid integers will be passed into the function.
*/



// 1 my solution:


function narcissistic1(digit) {

  const separateDigitsArr = [...String(digit)];
  // get length of digits:

  const digitLength = String(digit).length;
  
  // get a power of every digit:
  const powDigits = [];
    separateDigitsArr.forEach( el => {
      powDigits.push(Math.pow(el, digitLength));
    });

  // get sum of digits from an array - convert to number:
  const sumDigits = powDigits.reduce((sum, num) => sum + num, 0);

  return sumDigits === digit? true : false;
}

console.log(narcissistic1(7)); // true
console.log(narcissistic1(371)); // true
console.log(narcissistic1(11176)); // false
