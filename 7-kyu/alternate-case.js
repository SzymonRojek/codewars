



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
