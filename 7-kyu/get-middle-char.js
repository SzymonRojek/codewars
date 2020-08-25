



/*
Description:
You are going to be given a word. 
Your job is to return the middle character of the word. 
If the word's length is odd, return the middle character.
If the word's length is even, return the middle 2 characters.

#Input

A word (string) of length 0 < str < 1000 
(In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). 
You do not need to test for this. 
This is only here to tell you that you do not need to worry about your solution timing out.

#Output

The middle character(s) of the word represented as a string.
*/



// 1


function getMiddle(str) {

  let position, length;
  
  if(str.length % 2 === 1) {
      position = str.length / 2;
      length = 1;  
  } else {
      position = str.length / 2 - 1;
      length = 2;
  }
  
  return str.substring(position, position + length);
}

console.log(getMiddle("test")); // 'es'
console.log(getMiddle("testing")); // 't'
console.log(getMiddle("middle")); // 'dd'
console.log(getMiddle("A")); // 'A'



// 2

const getMiddle = str => (str.length % 2 === 1) ? str.substring(str.length / 2, str.length / 2 + 1) : str.substring(str.length / 2 - 1, str.length / 2 - 1 + 2);



// 3

function getMiddle(str) {
  return str.substr(Math.ceil(str.length / 2 - 1), str.length % 2 === 0 ? 2 : 1);
}



// 4

function getMiddle(s) {
  return s.slice((s.length-1)/2, s.length/2+1);
}