



/*
Remove duplication

Description:
Write a function that accepts an array of number as parameter, and it returns array after removing all duplicated numbers.

Example removeDuplication([1,2,3,2,4,6,2,6,7]) Output [1,3,4,7].

Here 2,6 are duplicated in array, so we should remove all numbers that are duplicated. 
The output will be 1,3,4,7 after removing 2,6.

Input : [1,2,1,2,1,1,2,2] , Output : [].

Input : [2,5,6,7,5,2,6] , Output: [7].
*/



// 1

function removeDuplication(arr) {
  const counter = {};
  const noDuplicates = [];
  
  arr.forEach(n => {

    counter[n] = (n in counter) ? counter[n]+1 : 1;

    // if (! (n in counter)) {
    // 	counter[n] = 0
    // }
    // counter[n]++

    // or:

    // if (!counter.hasOwnProperty(n)) {
    // 	counter[n] = 0
    // }
    // counter[n]++
  })
  
  for (const key in counter) {
    const amount = counter[key];
    
    if (amount === 1) {
      noDuplicates.push( Number(key) );
    }
  }
  
  return noDuplicates;
}

console.log((removeDuplication([1,2,3,2,4,6,2,6,7]))); //  [1,3,4,7]
console.log((removeDuplication([1,2,1,2,1,1,2,2]))); // []
console.log((removeDuplication([2,5,6,7,5,2,6]))); // [7]
console.log((removeDuplication([0,1]))); // [0,1]



// 2

const removeDuplication = a => a.filter( v => a.indexOf(v) === a.lastIndexOf(v) ) ;



// 3

const removeDuplication = arr => {
  const numbers = {};
  
  arr.forEach(n => numbers[n] ? numbers[n]++ : numbers[n] = 1);

  return Object
    .keys(numbers);
    .filter(n => numbers[n] === 1);
    .map(n => +n);
};