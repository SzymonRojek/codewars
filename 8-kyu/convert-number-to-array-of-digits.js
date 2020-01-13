

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


