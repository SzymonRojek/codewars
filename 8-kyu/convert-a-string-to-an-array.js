

/*  Description:

Write a function to split a string and convert it into an array of words. For example:

"Robin Singh" ==> ["Robin", "Singh"]

"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]   */



//  1

const stringToArray = string => string.split(' ');

console.log(stringToArray('Robin Singh')); // ['Robin', 'Singh']
console.log(stringToArray('I love arrays they are my favorite'));
// ['I', 'love', 'arrays', 'they', 'are', 'my', 'favorite']