/*  Given an array of numbers (a list in groovy), determine whether the sum of all of the numbers is odd or even.

Give your answer in string format as 'odd' or 'even'.

If the input array is empty consider it as: [0] (array with a zero).

Example:
oddOrEven([0]) returns "even"
oddOrEven([2, 5, 34, 6]) returns "odd"
oddOrEven([0, -1, -5]) returns "even" */


//  1

const oddOrEven = x => {
  // create a variable number and sum all digits in the array

  let sum = 0;

  for (let i = 0; i < x.length; i++) {
          sum += x[i];
  }

  // create a condition if and return odd or even 

  if (sum % 2 === 0) {
          return 'even';
  }
  return 'odd';


};

console.log(oddOrEven([1, 2])); // odd