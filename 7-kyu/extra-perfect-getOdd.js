

/*
Given a positive integer N , Return the extra perfect numbers in range from 1 to N .

Number passed is always Positive .

Returned array/list should contain the extra perfect numbers in ascending order from lowest to highest

extraPerfect(3)  ==>  return {1,3}

*/


//  1

function extraPerfect(n) {
  const odd = [];

  for (let i = 0; i <= n; i++) {
          if (i % 2 !== 0) {
                  odd.push(i);
          }
  }
  return odd;
}

console.log(extraPerfect(3)); // [1,3]
console.log(extraPerfect(5)); // [1,3,5]
console.log(extraPerfect(7)); //  [1,3,5,7]
console.log(extraPerfect(28)); // [1,3,5,7,9,11,13,15,17,19,21,23,25,27]
console.log(extraPerfect(39)); // [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39]

