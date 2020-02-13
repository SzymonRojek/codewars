

/*
Description:
* No Loops Allowed *

You will be given an array (a) and a limit value (limit). 
You must check that all values in the array are below or equal to the limit value. 
If they are, return true. Else, return false.

You can assume all values in the array are numbers.

Do not use loops. Do not modify input array.

Looking for more, loop-restrained fun? Check out the other kata in the series:
*/


// 1

const smallEnough = (a, limit) => a.every(e => e <= limit);

console.log(smallEnough([66, 101], 200)); // true
console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100)); // false
console.log(smallEnough([101, 45, 75, 105, 99, 107], 107)); // true
console.log(smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120)); // true



//  2

const smallEnough = (a, limit) => Math.max(...a) <= limit;



//  3

function smallEnough(a, limit) {
  a.sort((c, d) => d - c);
  return a[0] <= limit;
}



//  4

const smallEnough = (a, limit) => a.map(num => num > limit).reduce((a, b) => a + b, 0) == 0;

