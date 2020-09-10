



/*
Can we divide it?

Description:
Your task is to create functionisDivideBy (or is_divide_by) to check if an integer number is divisible by each out of two arguments.

A few cases:
*/



// 1

function isDivideBy(number, a, b) {

  return Number.isInteger(number / a) && Number.isInteger(number / b);
}

console.log(isDivideBy(-12, 2, -6)); // true
console.log(isDivideBy(-12, 2, -5)); // false
console.log(isDivideBy(45, 1, 6)); // false
console.log(isDivideBy(45, 5, 15)); // true
console.log(isDivideBy(4, 1, 4)); // true
console.log(isDivideBy(15, -5, 3)); //  true



// 2

const isDivideBy = (number, a, b) => number % a === 0 && number % b === 0;



// 3

const isDivideBy = (number, a, b) => !(number % a || number % b); 



// 4

const isDivideBy = (n, ...r) => r.every((v) => n % v === 0);
// r.every((v) => !(n % v))