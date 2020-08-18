


/*
Description:
Define a method hello that returns "Hello, Name!" to a given name, 
or says Hello, World! if name is not given (or passed as an empty String).

Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

Examples:

hello "john"   => "Hello, John!"
hello "aliCE"  => "Hello, Alice!"
hello          => "Hello, World!" # name not given
hello ''       => "Hello, World!" # name is an empty String
*/



// 1

const hello = name => `Hello, ${name ? name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() : "World"}!`;


console.log((hello('johN'))); // 'Hello, John!' when given 'johN'
console.log((hello('alice'))); // 'Hello, Alice!' when given 'alice'
console.log((hello(''))); // 'Hello, World!'
console.log((hello())); // 'Hello, World!'