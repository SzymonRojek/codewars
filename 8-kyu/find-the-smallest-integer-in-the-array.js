

/*  Description:
Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.  */



//  1

const findSmallestInt = args => {
  args.sort((a, b) => a - b)[0];
  return args[0];
};

console.log(findSmallestInt([78, 56, 232, 12, 8])); // 8
console.log(findSmallestInt([78, 56, 232, 12, 18])); // 12
console.log(findSmallestInt([78, 56, 232, 412, 228])); // 56
console.log(findSmallestInt([78, 56, 232, 12, 0])); // 0
console.log(findSmallestInt([1, 56, 232, 12, 8])); // 1



//  2

const findSmallestInt = args => Math.min(...args);



//  3

const findSmallestInt = args => Math.min.apply(null, args);



//  4

const findSmallestInt = args => args.sort((a, b) => a - b)[0];



//  5

const findSmallestInt = args => args.reduce((prev, curr) => (prev < curr ? prev : curr));



//  6

const findSmallestInt = args => Math.min.apply(this, args);



//  7

const findSmallestInt = args => {
  let min = Number.POSITIVE_INFINITY;
  args.forEach((value, index) => {
          if (value < min) min = value;
  });
  return min;
};



//  8

const findSmallestInt = args => {
  let lowest;
  for (const i in args) {
          if (i == 0) {
                  lowest = args[i];
          } else if (lowest >= args[i]) {
                  lowest = args[i];
          }
  }
  return lowest;
};



//  9

const findSmallestInt = args => {
  let min = args[0];
  for (let i = 0; i < args.length; i++) {
          min = min < args[i] ? min : args[i];
  }
  return min;
};