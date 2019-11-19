
// Given an argument that may be a String or a Number, return a simple greeting.

// 1

const hello = name => {
  let greetings = 'Hello';
   
   return greetings + ' ' + name
}

console.log(hello('World')); // Hello world


// 2 

function hello(name) {
  return "Hello " + name;
}

console.log(hello('Gosia')); // Hello Gosia



// 3

function hello(name) {
  return `Hello ${name.toString()}`
}
console.log('Hello World'); // Hello World



// 4

function hello(name) {
  return ['H','e','l','l','o',' '].concat(name.toString().split('')).join('')
}
console.log('Hello World'); // Hello World