

/*  Description:
Write a function named sumDigits which takes a number as input
and returns the sum of the absolute value of each of the number's decimal digits. 

For example:

  sumDigits(10);  // Returns 1
  sumDigits(99);  // Returns 18
  sumDigits(-32); // Returns 5    */



  //  1

  const sumDigits = number => {
    const arr = number
            .toString()
            .split('-')
            .join('');
    const arr1 = arr.toString().split('');
    return arr1.map(Number).reduce((a, b) => a + b, 0);
};

console.log(sumDigits(10)); // 1
console.log(sumDigits(99)); // 18
console.log(sumDigits(-32)); // 5



//  2

const sumDigits = number =>
        Math.abs(number)
                .toString()
                .split('')
                .reduce((a, b) => +a + +b, 0);

console.log(sumDigits(10)); // 1
console.log(sumDigits(99)); // 18
console.log(sumDigits(-32)); // 5