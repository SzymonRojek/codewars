



/*

Jenny's secret message

Jenny has written a function that returns a greeting for a user. 
However, she's in love with Johnny, and would like to greet him slightly different. 
She added a special case to her function, but she made a mistake.

Can you help her?

*/



// 1

function greet(name){
  return (name === 'Johnny') ? 'Hello, my love!' : `Hello, ${name}!`;
}
console.log(greet("Jim")); //  "Hello, Jim!"
console.log(greet("Jane")); // "Hello, Jane!"
console.log(greet("Simon")); // "Hello, Simon!"
console.log(greet("Johnny")); // "Hello, my love!"




// 2

function greet(name){
  return "Hello, " + (name == "Johnny" ? "my love" : name) + "!";
}