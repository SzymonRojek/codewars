



/*

Create phone number

Write a function that accepts an array of 10 integers (between 0 and 9), 
that returns a string of those numbers in the form of a phone number.

Example:
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.
Don't forget the space after the closing parentheses!

*/



// 1

function createPhoneNumber(numbers) {
  const firstThreeNum = numbers.splice(0,3).join('');
  const secondThreeNum = numbers.splice(0,3).join('');
  const lastFourNum = numbers.join('');

  return `(${firstThreeNum}) ${secondThreeNum}-${lastFourNum}`;
}


console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // "(123) 456-7890"
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])); // "(111) 111-1111"
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // "(123) 456-7890"



// 2

function createPhoneNumber( numbers ) {
  let phone = "(nnn) nnn-nnnn";

  numbers.forEach(num => {
    phone = phone.replace('n', num);
  })

  return phone;
}