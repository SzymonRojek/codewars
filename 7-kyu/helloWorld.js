
// Given an argument that may be a String or a Number, return a simple greeting.

// 1

const hello = name => {
  let greetings = 'Hello';
   
   return greetings + ' ' + name
}

console.log(hello('world')); // Hello world


// 2 

function hello(name) {
  return "Hello " + name;
}

console.log(hello('Gosia')); // Hello Gosia