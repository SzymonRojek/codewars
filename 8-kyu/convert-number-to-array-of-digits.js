

/*  Convert number to reversed array of digits
Given a random number: 348597

You have to return the digits of this number within an array in reverse order.

Example:
348597 => [7,9,5,8,4,3]   */


//  1

const digitize = n => {

  n = `${n}`.split('');

  return n.map(Number).reverse();
};

console.log(digitize(35231)); // [1, 3, 2, 5, 3]



//  2

const digitize = n =>
        String(n)
                .split('')
                .map(Number)
                .reverse();

console.log(digitize(35231)); // [1, 3, 2, 5, 3]       



//  3

function digitize(n) {
  return (n + '') // `${n}`
          .split('')
          .map(Number)
          .reverse();
}

console.log(digitize(35231)); // [1, 3, 2, 5, 3]



//  4

const digitize = n => Array.from(String(n), Number).reverse();

console.log(digitize(35231)); // [1, 3, 2, 5, 3]



//  5

function digitize(n) {
  return n
          .toString()
          .split('')
          .reverse()
          .map(i => parseInt(i));
}
console.log(digitize(35231)); // [1, 3, 2, 5, 3]



//  6

function digitize(n) {

  const numArr = [];

  while (n > 0) {
          numArr.push(n % 10);

          n = Math.floor(n / 10);
  }

  return numArr;
}

console.log(digitize(35231)); // [1, 3, 2, 5, 3]



//  7

const digitize = n => [...String(n)].map(Number).reverse();

console.log(digitize(35231)); // [1, 3, 2, 5, 3]



//  8

function digitize(n) {
  return `${n}`
          .split('')
          .reverse()
          .map(n => +n);
}
console.log(digitize(35231)); // [1, 3, 2, 5, 3]
