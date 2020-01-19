

/*    Description:
Make a simple function called greet that returns the most-famous "hello world!".

Style Points
Sure, this is about as easy as it gets. 
But how clever can you be to create the most creative hello world you can think of? 
What is a "hello world" solution you would want to show your friends?   */




//  1

const greet = x => 'hello world!';

console.log(greet());



//  2

const greet = function() {
  const teerg = '!DLROW OLLEH';

  return teerg
          .split('')
          .reverse()
          .join('')
          .toLowerCase();
};

console.log(greet());



//  3

const greet = function() {
  return [104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100, 33].map(e => String.fromCharCode(e)).join('');
};

console.log(greet());



//  4

const greet = function() {
  const ary = ['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd', '!'];
  let str = '';
  for (let i = 0; i < ary.length; i++) {
          str += ary[i];
  }
  return str;
};

console.log(greet());



//  5

const greet = String.prototype.toString.bind('hello world!');

console.log(greet());
