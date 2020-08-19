


/*
Description:
Write a function that returns a sequence (index begins with 1) of all the even characters from a string. 

If the string is smaller than two characters or longer than 100 characters, the function should return "invalid string".

For example:

"abcdefghijklm" --> ["b", "d", "f", "h", "j", "l"]
"a"             --> "invalid string"

*/




// 1

function evenChars(string) {
  
  if(string.length < 2 || string.length > 100) return 'invalid string';

  let newArr = [];  

  [...string].forEach((el, i) => {
    if(i % 2 === 1) newArr.push(el);
  })

  return newArr;
}


console.log((evenChars ("a"))); //  "invalid string"
console.log((evenChars ("abcdefghijklm"))); //  ["b", "d", "f", "h", "j", "l"]




// 2

const evenChars = string => (string.length < 2 || string.length > 100)? 'invalid string' : [...string].filter((el, i) => i % 2);

