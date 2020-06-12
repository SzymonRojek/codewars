


/*
Description:
Create a find function that takes a string and an array as arguments. 
If the string is in the array, return true.

For example:

find("hello", ["bye bye","hello"]) // return true
find("anything", ["bye bye","hello"]) // return false
*/


// 1 my solution:

const find = (string, array) => array.includes(string);

console.log(find("hello", ["bye bye","hello"])); // true
console.log(find("anything", ["bye bye","hello"])); // false



// 2:

const find = (string, array) => array.indexOf(string) > -1;
// also >=0


// 3: 

const find = (word, array) => array.some(element => element === word);