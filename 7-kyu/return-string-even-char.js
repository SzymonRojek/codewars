


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




// 3

const evenChars = string => (string.length > 2 && string.length < 100) ? Array.from(string).filter((_, i) => i % 2) : 'invalid string';




// 4

const evenChars = string => {

  const newArr = [];

  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    if(i % 2) newArr.push(char);
    
  }

  return string.length < 2 || string.length > 100 ? 'invalid string' : newArr;

}




// 5

const evenChars = str => (str.length < 2 || str.length > 100) ? "invalid string" : str.replace(/.(.)?/g, '$1').split('');




// 6

const evenChars = str => {

  if(str.length < 2 || str.length > 100) {
    return 'invalid string';
  } else {
    return [...str].filter((_, index) => index % 2 === 1);
  }

}

