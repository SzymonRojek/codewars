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
