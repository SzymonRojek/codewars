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


//  3

const sumStr = (a, b) => {
  a = Number(a);
  b = Number(b);
  return String(a + b);
};

console.log(sumStr('4', '5')); // 9
console.log(sumStr('34', '5')); // 39



//  4

const sumStr = (a, b) => `${+a + +b}`;
// const sumStr = (a,b) => String(+a + +b);
// const sumStr = (a,b) => (+a+ +b)+'';

console.log(sumStr('4', '5')); // 9
console.log(sumStr('34', '5')); // 39



//  5

const sumStr = (a, b) => (parseInt(a) || 0 + parseInt(b) || 0).toString();

console.log(sumStr('', '2')); // 2
console.log(sumStr('34', '5')); // 39



//  6

const sumStr = (a, b) => `${1 * a + 1 * b}`;
// const sumStr=(a,b)=>1*a+1*b+"";

console.log(sumStr('', '')); // 0
console.log(sumStr('34', '5')); // 39



// 7

const sumStr = (...strings) => strings.reduce((a, b) => `${1 * a + 1 * b}`, 0);
console.log(sumStr('', '')); // 0
console.log(sumStr('34', '5')); // 39



// 8

const sumStr = (a, b) => `${Number(a) + Number(b) || 0}`;

console.log(sumStr('', '')); // 0
console.log(sumStr('34', '5')); // 39



/* 9 exmaple where I am using casting:

+x // cast to Number
'' + x // cast to String
!!x // cast to Boolean */

const sumStr = (a, b) => {
  if (a === '') {
          return `${a + +b}`;
  }

  if (b === '') {
          return `${a + b}`;
  }
  const check = parseInt(a) + parseInt(b);

  return `${check}`;
};


console.log(sumStr('', '')); // 0
console.log(sumStr('2', '')); // 2
console.log(sumStr('', '2')); // 2
console.log(sumStr('2', '2')); // 4



//  10

const sumStr = (a, b) => {
 

  if (a === '') {
          return a + +b;
  }

  if (b === '') {
          return a + b;
  }
  const check = parseInt(a) + parseInt(b);

  return check.toString();
};

console.log(sumStr('8', '8')); // 16
console.log(sumStr('', '8')); // 8
console.log(sumStr('2', '2')); // 4
console.log(sumStr('', '')); // 0



// 11

const sumStr = (a, b) => {
 

 if (a === '' || b === '') {
          return `${+a + +b}`;
  }

  const check = parseInt(a) + parseInt(b);

  return check.toString();
};

console.log(sumStr('8', '8')); // 16
console.log(sumStr('', '8')); // 8
console.log(sumStr('2', '2')); // 4
console.log(sumStr('', '')); // 0

 

// 12

const sumStr = (a, b) =>
        a === '' && b === '' ? '0' : a == 0 ? b : b == 0 ? a : (parseInt(a) + parseInt(b)).toString();

console.log(sumStr('2', '2')); // string 4
console.log(sumStr('0', '2')); // string 2
console.log(sumStr('', '3')); // string 3
console.log(sumStr('', '')); // string 0


