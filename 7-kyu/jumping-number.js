

/*  Number passed is always Positive .

Return the result as String .

The difference between ‘9’ and ‘0’ is not considered as 1 .

All single digit numbers are considered as Jumping numbers. */



//  1

const jumpingNumber = n => {
  n = n
          .toString()
          .split('')
          .map(Number);

  let check = true;

  n.forEach((el, i, arr) => {
          // check the last element of an array
          if (arr.length === i + 1) {
                  return;
          }
          
          /*      also you can use this statement: 
                  if (!(arr[i + 1] || arr[i + 1] === 0)) {                return; 
                  }
          */

          const result = arr[i] - arr[i + 1];

          if (!(result === 1 || result === -1)) {
                  check = false;
          }
  });

  return check ? 'Jumping!!' : 'Not!!';
};

console.log(jumpingNumber(1)); //  "Jumping!!"
console.log(jumpingNumber(7)); //  "Jumping!!"
console.log(jumpingNumber(9)); //  "Jumping!!"
console.log(jumpingNumber(23)); //  "Jumping!!"
console.log(jumpingNumber(32)); //  "Jumping!!"
console.log(jumpingNumber(79)); // "Not!!"
console.log(jumpingNumber(98)); //  "Jumping!!"
console.log(jumpingNumber(8987)); //  "Jumping!!"
console.log(jumpingNumber(4343456)); //  "Jumping!!"
console.log(jumpingNumber(98789876)); //  "Jumping!!"
