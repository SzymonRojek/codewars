


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



// 2:


function narcissistic(digit) {
 
  const strDigits = String(digit);
  const strDigitsLength = strDigits.length;
 
  // digit in the array
    const digitsArr = [];
      for(let i = 0; i < strDigits.length; i++){
        digitsArr.push(strDigits[i]);
      }

  // get power of every digit:
    const powDigits = [];
      for (let i = 0; i < digitsArr.length; i++) {
        powDigits.push(Math.pow(digitsArr[i], Number(strDigitsLength)));
      }

  // get sum of all powers digits: 

    let sumDigits = 0;  
      for (let i = 0; i < powDigits.length; i++) {
        sumDigits += powDigits[i];
      }

  // condition - digit has to be equal to the sum all power of digits:
    const result = false;

      if(sumDigits == digit) return true;

  return result;
}



// 3

const narcissistic = digit => [...String(digit)].reduce((sum, value) => sum + Math.pow(value, (String(digit)).length), 0) === digit;



// 4

function narcissistic( num ) {
  let remaining = num;
  const digits = [];

  while (remaining > 0) {
    digits.push(remaining % 10);
    remaining = Math.floor(remaining / 10);
  }
  
  return num === digits.reduce((sum, value) => sum + Math.pow(value, digits.length), 0);
}



// 5:

const narcissistic = num => [...String(num)].map( (digit, i, arr) => digit ** arr.length).reduce( (sum, value) => Number(sum) + Number(value)) === num;
