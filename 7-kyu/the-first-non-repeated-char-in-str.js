


/*
Description:
You need to write a function, that returns the first non-repeated character in the given string.

For example for string "test" function should return 'e'. For string "teeter" function should return 'r'.

If a string contains all unique characters, then return just the first character of the string.

Example: for input "trend" function should return 't'

You can assume, that the input string has always non-zero length.

If there is no repeating character, return null in JS or Java, and None in Python.
*/



// 1:

  
function firstNonRepeated(str) {
 
  const duplicates = [...str].reduce((acc, el, i, arr) => {
    if (arr.indexOf(el) !== i && acc.indexOf(el) < 0) acc.push(el); 

    return acc;
  }, []);

  const unique = [...str].filter(el => duplicates.indexOf(el) === -1).join('')[0];

   return unique || null;
 }

console.log(firstNonRepeated("test")); // e
console.log(firstNonRepeated("teeter")); // r
console.log(firstNonRepeated("1122321235121222")); // 5
console.log(firstNonRepeated('arek')); // a  
console.log(firstNonRepeated('aabb')); // null



// 2:

const firstNonRepeated = s => [...s].find(i => s.indexOf(i) == s.lastIndexOf(i)) || null;



// 3:

function firstNonRepeated(s) {
  for(var i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
      return s[i]
    }
  }
  return null
}



// 4:

function firstNonRepeated(str) {
  var s = [...new Set(str)]
  for(let x of s){
    if(str.lastIndexOf(x)==str.indexOf(x)){
      return x
    }
  }
  return null
}




// 5:
  
const firstNonRepeated = s => {
  let result = [...s].filter(char => [...s].indexOf(char) === [...s].lastIndexOf(char))[0] 
  return result ? result : null
  }
