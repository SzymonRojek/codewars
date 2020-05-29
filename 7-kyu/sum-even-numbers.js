


/*
Write a function named sumEvenNumbers, taking a sequence of numbers as single parameter. 
Your function must return the sum of the even values of this sequence.

Only numbers without decimals like 4 or 4.0 can be even.

Input
sequence of numbers: those numbers could be integers and/or floats.
For example, considering this input value : [4,3,1,2,5,10,6,7,9,8], then your function should return 30 (because 4 + 2 + 10 + 6 + 8 = 30).
*/


// 1:

function sumEvenNumbers(arr) {
  let sum = 0;
 
    arr.forEach(num => {
      if(num %2 === 0) {
        sum += num;
      }
    });
 
    //  arr.forEach(num => (num %2 === 0)? sum += num : num);
 
 
  return sum;
}
 
console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 30
console.log(sumEvenNumbers([2, 4, 3, 10, 2, 1, 0, 1, 2])); // 20



// 2:

const sumEvenNumbers = input => input.filter(x => x % 2 == 0).reduce((x, y) => x + y, 0);



// 3:

function sumEvenNumbers(input) {
  let x = 0;
  input.forEach(e => {
    if(e % 2 == 0) x += e;
  });
  return x;
}



// 4:

const sumEvenNumbers = input => input.reduce((acc, currentValue) => acc + (currentValue % 2 ? 0 : currentValue));