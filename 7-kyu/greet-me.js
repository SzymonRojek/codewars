


/*
Description:
Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

Example:

"riley" --> "Hello Riley!"
"JACK"  --> "Hello Jack!"
*/

 
// forEach
 
const greet = name => {
 
  const names = name.toLowerCase().split(' ');
    let capName = '';
 
    names.forEach(name => {
      capName += ' ' + name.charAt(0).toUpperCase() + name.slice(1);
    });
 
    return `Hello${capName}!`;
  };
 
  console.log(greet('ronald rIIley')); // Hello Riiley!
 
 
// reduce
 
const greet = name => {
  const names = name.toLowerCase().split(' ');
 
  const capName = names.reduce((acc, name) => {
    return acc + ' ' + name.charAt(0).toUpperCase() + name.slice(1);
  }, '');
 
  return `Hello${capName}!`;
};
 
  console.log(greet('ronald rIIley')); // Hello Ronald Riiley!