/* Description:
Complete the function that takes an array of words.

You must concatenate the nth letter from each word to 
construct a new word which should be returned as a 
string, where n is the position of the word in the list.

For example:

["yoda", "best", "has"]  -->  "yes"
  ^        ^        ^
  n=0     n=1     n=2
Note: Test cases contain valid input only - i.e. a 
string array or an empty array; and each word will have 
enough letters. */


//  1

const nthChar = words => {
  let n = '';
  for (let i = 0; i < words.length; i++) {
          n += words[i].charAt(i);
  }
  return n;
};
console.log(nthChar(['yoda', 'best', 'has'])); // yes



//  2


const nthChar = words => words.map((word, index) => word[index]).join('');

console.log(nthChar(['yoda', 'best', 'has'])); // yes



//  3

function nthChar(words) {
  return words.map((str, i) => str.charAt(i)).join('');
}

console.log(nthChar(['yoda', 'best', 'has'])); // yes



//  4

function nthChar(words) {
  return words.reduce((acc, val, index) => acc + val[index], '');
}

console.log(nthChar(['yoda', 'best', 'has'])); // yes



//  5

function nthChar(words) {
  let str = '';
  for (let i = 0; i < words.length; ++i) str += words[i][i];
  return str;
}

console.log(nthChar(['yoda', 'best', 'has'])); // yes



//  6

const nthChar = words => words.reduce((acc, x, i) => acc + x[i], '');

console.log(nthChar(['yoda', 'best', 'has'])); // yes



//  7

function nthChar(words) {
  return words.map(Function.prototype.call, String.prototype.charAt).join('');
}

console.log(nthChar(['yoda', 'best', 'has'])); // yes



//  8

function nthChar(words) {
  let count = 0;
  let result = '';
  for (const i in words) {
          result += words[i][count++];
  }
  return result;
}

console.log(nthChar(['yoda', 'best', 'has'])); // yes