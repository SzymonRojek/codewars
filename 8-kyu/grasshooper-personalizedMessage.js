

/*    Description:

Personalized greeting

Create a function that gives a personalized greeting. 
This function takes two parameters: name and owner.

Use conditionals to return the proper message:

case	             return
name equals owner	 'Hello boss'
otherwise	         'Hello guest'    */



//  1

const greet = (name, owner) => {
  if (name == owner) {
          return 'Hello boss';
  }
  return 'Hello guest';
};

console.log(greet('Daniel', 'Daniel')); // 'Hello boss'
console.log(greet('Greg', 'Daniel')); // 'Hello guest'



//  2

const greet = (name, owner) => (name === owner ? 'Hello boss' : 'Hello quest');

console.log(greet('Daniel', 'Daniel')); // 'Hello boss'
console.log(greet('Greg', 'Daniel')); // 'Hello guest'



//  3

const greet = (name, owner) => `Hello ${name == owner ? 'boss' : 'guest'}`;

console.log(greet('Daniel', 'Daniel')); // 'Hello boss'
console.log(greet('Greg', 'Daniel')); // 'Hello guest'



//  4

const greet = (name, owner) => `Hello ${name == owner ? 'boss' : 'guest'}`;

console.log(greet('Daniel', 'Daniel')); // 'Hello boss'
console.log(greet('Greg', 'Daniel')); // 'Hello guest'



//  5

const greet = (name, owner) => {
  let result = '';
  if (name === owner) {
          result = 'Hello boss';
  } else {
          result = 'Hello guest';
  }
  return result;
};

console.log(greet('Daniel', 'Daniel')); // 'Hello boss'
console.log(greet('Greg', 'Daniel')); // 'Hello guest'
