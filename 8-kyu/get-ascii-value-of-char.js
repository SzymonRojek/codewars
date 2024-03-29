


/*
Description:
Get ASCII value of a character.

For the ASCII table you can refer to http://www.asciitable.com/
*/



// 1:

const getASCII = c => c.charCodeAt(0);

console.log(getASCII('A')); // 65
console.log(getASCII(' ')); // 32
console.log(getASCII('!')); // 33



// 2:

function getASCII(c) {
  return c.charCodeAt(0);
}



// 3:

const getASCII = c => c.charCodeAt();



// 4:


const getASCII = chars => [...chars].map(char => char.charCodeAt()).reduce((curr, prev) => prev + curr);