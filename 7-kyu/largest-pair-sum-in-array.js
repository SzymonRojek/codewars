



/*

Largest pair sum in an array

Given a sequence of numbers, find the largest pair sum in the sequence.

For example

[10, 14, 2, 23, 19] -->  42 (= 23 + 19)
[99, 2, 2, 23, 19]  --> 122 (= 99 + 23)

Input sequence contains minimum two elements and every element is an integer.

*/




// 1

const largestPairSum = num =>  num.map(v => num.sort((a, b) => b - a)) ? num[0] + num[1] : 0;
  
console.log(largestPairSum([-10, -8, -16, -18, -19])); // -18
console.log(largestPairSum([10, 14, 2, 23, 19])); // -->  42 (= 23 + 19)
console.log(largestPairSum([99, 2, 2, 23, 19])); //  --> 122 (= 99 + 23)




// 2

function largestPairSum(numbers) {
  let [a, b] = numbers.sort((a, b) => b - a);
  return a + b;
}