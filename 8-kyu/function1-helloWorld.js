

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

