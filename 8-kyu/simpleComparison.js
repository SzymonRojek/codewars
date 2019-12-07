


/* Description:
Write a function that will compare two values, one will be a 
number and one will be a string. Return true if they are the same 
character (regardless of their different data types) and return 
false if they are not.

To make this challange harder and to promp the challenger to read 
up about coercion I have disabled some of the built in methods 
including .toString(), .join(), .split(), parseInt and .Number() */


//  1

const add = (a, b) => {

  if(a == b) {return true} else { return false};
}

console.log(add(2, '2')); // true



//  2

const add = (a, b) => a == b;



//  3

const add = (a, b) => (`${a}`)==(`${b}`);



//  4

const add = (a, b) => a + '' === b + '';

console.log(add(2, '2')); // true



//  5

const add = (a, b) => eval(a-b) == 0;

console.log(add(2, '2')); // true



//  6

const add = (a, b) => {
  // convert both to string and compare
  let n = String(a);
  let m = String(b);
  
  return (n === m ? true : false);
}

console.log(add(2, '3')); // false



//  7

const add = (a, b) => (a == b) ? true : false;

console.log(add(2, '3')); // false



//  8

function add(a, b){
  return String(a) == String(b) ? true : false;
}