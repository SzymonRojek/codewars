

/*  Description:
Code as fast as you can! You need to double the integer and return it.  */


// 1

const doubleInteger = i => i*2

console.log(doubleInteger(2)); // 4



//  2

function doubleInteger(i) {
  return i + i;
}

console.log(doubleInteger(2)); // 4



//  3

function doubleInteger(i) {
  return parseInt(i) * 2;
}

console.log(doubleInteger(2)); // 4



//  4

function doubleInteger(i) {
  if (Math.round(i) === i) {
          return i * 2;
  }
}

console.log(doubleInteger(2)); // 4



//  5

const doubleInteger = i => Number.parseInt(i) * 2;

console.log(doubleInteger(2)); // 4



//  6

const doubleInteger = i => {
  Number.isInteger(i);
  return i * 2;
};

console.log(doubleInteger(2)); // 4



