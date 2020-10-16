


/*

In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15.

More examples in the test cases.

Good luck!

*/


// 1

function noRepeats(arr) {
  let singleVal = []

  let obj = arr.reduce((acc, val) => {
    acc[val] ? acc[val]++ : acc[val] = 1;
    return acc
    // return (acc[val] = acc[val]+1 || 1) && acc
  } , {})

    for (const key in obj) {
      const value = obj[key]
        if(value === 1) {
          singleVal.push(Number(key))
        }
    }

return singleVal;
}

console.log(noRepeats([4,5,7,5,4,8])); // 15
console.log(repeats([9, 10, 19, 13, 19, 13])); // 19
console.log(repeats([16, 0, 11, 4, 8, 16, 0, 11])); // 12
console.log(repeats([5, 17, 18, 11, 13, 18, 11, 13])); // 22
console.log(repeats([5, 10, 19, 13, 10, 13])); // 24

