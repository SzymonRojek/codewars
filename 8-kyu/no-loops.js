/*
Description:
* No Loops Allowed *

You will be given an array (a) and a value (x). 
All you need to do is check whether the provided array contains the value, without using a loop.

Array can contain numbers or strings. X can be either. 
Return true if the array contains the value, false if not. 
With strings you will need to account for case.

Looking for more, loop-restrained fun? Check out the other kata in the series:

https://www.codewars.com/kata/no-loops-1-small-enough

https://www.codewars.com/kata/no-loops-3-copy-within
*/ 



//  1

const check = (a, x) => {
  const checkTheValue = a.includes(x);

  return checkTheValue;
};

console.log(check([66, 101], 66)); // true
console.log(check([80, 117, 115, 104, 45, 85, 112, 115], 45)); // true
console.log(check(['t', 'e', 's', 't'], 'e')); // true
console.log(check(['what', 'a', 'great', 'kata'], 'kat')); // false



//  2

check = (a, x) => a.some(v => v === x);



//  3

function check(a,x){
  let result = a.indexOf(x);
  return result < 0 ? false : true;
};



//  4

function check(a, x) {
  const result = a.indexOf(x);
  return !(result < 0);
}



//  5

const check = Function.prototype.call.bind(Array.prototype.includes);



