/* Create a function that takes 2 positive integers in form of a string as an input, and outputs the sum (also as a string):

  sumStr("4", "5")    // should output "9"
  sumStr("34", "5")   // should output "39"
  
If either input is an empty string, consider it as zero. */


//  1 

const sumStr = (a, b) => {
  const firstParameter = a === '' ? 0 : parseInt(a);
  const secondParameter = b === '' ? 0 : parseInt(b);
  const result = firstParameter + secondParameter;

  return result.toString();
};

console.log(sumStr('4', '5')); // 9 
console.log(sumStr('34', '5')); // 39 


//  2

const sumStr = (a, b) => String(Number(a) + Number(b));

console.log(sumStr('4', '5')); // 9
console.log(sumStr('34', '5')); // 39