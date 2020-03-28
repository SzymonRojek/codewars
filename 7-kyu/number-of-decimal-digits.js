/*


Description:
Determine the total number of digits in the integer (n>=0) given as input to the function. 
For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. 

Be careful to avoid overflows/underflows.

All inputs will be valid.
*/



//  1

const digits = n => {
  n = [...`${n}`];
  return n.length;
};

console.log(digits(5)); // 1
console.log(digits(12345)); // 5
console.log(digits(9876543210)); // 10



//  2

const digits = n => `${n}`.length;



//  3

const digits = n => String(n).length;



//  4

const digits = n => n.toString().length;



//  5

const digits = n => ('' + n).length;



//  6

const digits = n => [...n.toString()].length;



//  7

function digits(n) {
  let result = 0;
  if (n == 0) {
          result++;
  }
  // code goes here
  while (n >= 1) {
          n = Math.floor(n / 10);
          result++;
  }
  return result;
}