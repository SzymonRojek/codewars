


/*
Description:
Write function parseFloat (for Javascript parseF) which takes a string and returns 
a number or Nothing (for Python None, for Javascript null) if conversion is not possible.
*/


// 1: my solution

const parseF = s => Number.isNaN(Number.parseFloat(s)) ? null : parseFloat(s);


console.log(parseF('03')); // 3
console.log(parseF('eee02')); // null
console.log(parseF('1.3')); // 1.3
console.log(parseF('2')); // 2

