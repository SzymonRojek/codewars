



/*

Alternate case

Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. 

E.g: Hello World -> hELLO wORLD

*/




// 1

const alternateCase = s => [...s].map(v => v === v.toLowerCase() ? v.toUpperCase() : v.toLowerCase()).join('');

console.log(alternateCase("abc")); // "ABC"
console.log(alternateCase("ABC")); // "abc"
console.log(alternateCase("Hello World")); // "hELLO wORLD"




// 2

function alternateCase(s) {
  const newString = [];
  
  if(isNaN(s)){
    for(let i = 0; i < s.length; i++){
      if(s[i] === s[i].toLowerCase()){
        // char is lower case
        newString[i] = s[i].toUpperCase();
      } else {
        // char is upper case
        newString[i] = s[i].toLowerCase();
      }
    }
    
    return newString.join('');
  } else {
    console.log('ERROR: ' + s + ' is a number');
  }
}

alternateCase('Hello World');



// 3

function alternateCase(s) {
  return s.split('').map(e => {
    return e.charCodeAt(0) > 96 ? e.toUpperCase() : e.toLowerCase();
  }).join('');
}