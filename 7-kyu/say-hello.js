


/*
Description:
Say hello!

Write a function to greet a person. Function will take name as input and greet the person by saying hello. 
Return null/nil/None if input is empty string or null/nil/None.

Example:

greet("Niks") === "hello Niks!";
greet("") === null; // Return null if input is empty string
greet(null) === null; // Return null if input is null
*/



// 1:

const greet = name => (name === '' || name === null)? null : `hello ${name}!`;

console.log(greet("Niks")); // "hello Niks!"
console.log(greet(null)); // null
console.log(greet('')); // null



// 2: 

const greet = name => name? `hello ${name}!` : null;



// 3:

const greet = n => n !== null && n !== '' ? `hello ${n}!` : null;



// 4:

function greet(name) {
  if (!name || name.length == 0) return null;
    
  return 'hello ' + name + '!';
}



// 5:

const greet = name => (!name || name.length == 0)? null : `hello ${name}!`;



// 6:

function greet(name) {
  
  switch (name) {
    case '':
      return null;
    case null:
      return null;
    default:
      return `hello ${name}!`;
  }
}