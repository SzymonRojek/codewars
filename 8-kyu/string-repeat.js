


/*
Description:
Write a function called repeatString which repeats the given string src exactly count times.

repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
*/



// 1

function repeatStr (n, s) {
  
  let newStr = '';
  
  while(n > 0) {
    newStr += s;
    --n;
  }

  return newStr;
}

console.log(repeatStr(3, '*')); // "***"
console.log(repeatStr(5, '#')); // "#####"
console.log(repeatStr(2, 'ha')); // "ha ha ")
console.log(repeatStr(6, 'I')); // "IIIIII"
console.log(repeatStr(5, 'Hello')); // "HelloHelloHelloHelloHello"



// 2

function repeatStr (n, s) {
  
  let newStr = '';
  
 
  for (let i =0; i < n; i++) {
    newArr += s;
  }

  return newStr;
}



// 3

const repeatStr = (n, s) => s.repeat(n);




// 4

function repeatStr (n, s) {
  return n > 1 ? s + repeatStr(--n, s) : s;
}



// 5

const repeatStr = (n, s) => Array(n+1).join(s);