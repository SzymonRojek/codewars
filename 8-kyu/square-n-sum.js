

/*  Description:

Complete the square sum function so that it squares each number 
passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

*/



//  1

const squareSum = numbers => {
  const square = [];
  for (let i = 0; i < numbers.length; i++) {
          square.push(numbers[i] ** 2);
  }

  let sum = 0;
  for (let j = 0; j < square.length; j++) {
          sum += square[j];
  }
  return sum;
};

console.log(squareSum([1, 2])); // 5
console.log(squareSum([0, 3, 4, 5])); // 50



//  2

const squareSum = numbers => numbers.reduce((sum, n) => n * n + sum, 0);

console.log(squareSum([1, 2])); // 5
console.log(squareSum([0, 3, 4, 5])); // 50



//  3

const square = number => number * number;

const sum = (firstNumber, secondNumber) => firstNumber + secondNumber;

const squareSum = numbers => numbers.map(square).reduce(sum);

console.log(squareSum([1, 2])); // 5
console.log(squareSum([0, 3, 4, 5])); // 50



//  4

const squareSum = numbers => {
  let sum = 0;

  numbers.forEach(n => {
          sum += n * n;
  });

  return sum;
};

console.log(squareSum([1, 2])); // 5
console.log(squareSum([0, 3, 4, 5])); // 50