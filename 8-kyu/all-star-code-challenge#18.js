/*


Description:
This Kata is intended as a small challenge for my students

All Star Code Challenge #18

Create a function called that accepts 2 string arguments 
and returns an integer of the count of occurrences the 2nd argument is found in the first one.

If no occurrences can be found, a count of 0 should be returned.

strCount('Hello', 'o') // => 1
strCount('Hello', 'l') // => 2
strCount('', 'z')      // => 0
Notes:

The first argument can be an empty string
The second string argument will always be of length 1
*/



//  1

const strCount = (str, letter) => str.split(letter).length - 1;

console.log('Hello'.count('o')); // 1
console.log('Hello'.count('l')); // 2
console.log(''.count('z')); // 0



//  2

function strCount(str, letter) {
  return str.split('').filter(c => c == letter).length;
}



//  3

function strCount(str, letter) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
          if (str[i] === letter) {
                  count++;
          }
  }
  return count;
}



//  4


function strCount(str, letter) {
  const arr = str.split('');
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
          if (arr[i].includes(letter)) {
                  count++;
          }
  }

  return count;
}



//  5

function strCount(str, letter) {
  // The number of occurences of a letter is the number of array elements
  // the given strings splits by the .split() method
  const length = str.split(letter.toString()).length;
  return length ? length - 1 : 0;
}



//  6

function strCount(str, letter) {
  let counter = 0;
  [...str].forEach(function(char) {
          char == letter ? counter++ : counter;
  });
  return counter;
}



//  7

const strCount = (w, l) => [...w].reduce((a, b) => a + +(b == l), 0);



// 8 Another method:

String.prototype.count = function(c) {
  let result = 0;

  for (i = 0; i < this.length; i++) if (this[i] == c) result++;
  return result;
};
console.log('Hello'.count('o')); // 1
console.log('Hello'.count('l')); // 2
console.log(''.count('z')); // 0



//  9

function strCount(str, letter) {
  let n = 0;
  for (const x of str) {
          if (x == letter) n++;
  }
  return n;
}