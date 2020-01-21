

/*  Description:
Challenge:

Given a two-dimensional array of integers, return the flattened version of the array 
with all the integers in the sorted (ascending) order.

Example:

Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

Addendum:

Please, keep in mind, that JavaScript is by default sorting objects alphabetically. 

For more information, please consult:

http://stackoverflow.com/questions/6093874/why-doesnt-the-sort-function-of-javascript-work-well   */



//  1

const flattenAndSort = array => Array.prototype.concat.apply([], array).sort((a, b) => a - b);

console.log(flattenAndSort([])); // []
console.log(flattenAndSort([[], [1]])); // [1]
console.log(flattenAndSort([[3, 2, 1],[7, 9, 8],[6, 4, 5],])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]])); //  [1, 2, 3, 4, 5, 6, 100]



//  2

const flattenAndSort = array => [].concat(...array).sort((a, b) => a - b);



//  3

const flattenAndSort = array => array.reduce((result, current) => [...result, ...current], []).sort((a, b) => a - b);



//  4

function flattenAndSort(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
          for (let j = 0; j < array[i].length; j++) {
                  newArray.push(array[i][j]);
          }
  }

  return newArray.sort((a, b) => a - b);
}



//  5

function flattenAndSort(array) {
  const nov = [];
  array.forEach(item => {
          nov.push(...item.sort());
  });
  return nov.sort((a, b) => a - b);
}



//  6

const flattenAndSort = array => {
  const FatherArray = [];
  array.map(items => FatherArray.push(...items));
  return FatherArray.sort((a, b) => a - b);
};



//  7

const flattenAndSort = arr =>
        !Array.isArray(arr) ? arr : arr.reduce((init, el) => init.concat(flattenAndSort(el)), []).sort((a, b) => a - b);



//  8

const flattenAndSort = array => array.reduce((acc, curr) => acc.concat(curr), []).sort((a, b) => a - b);



//  9

const flattenAndSort = a => Array.prototype.concat(...a).sort((x, y) => x - y);



//  10

const make = arr => arr.reduce((newArr, elem) => newArr.concat(elem), []);

const sorti = arr => arr.sort((a, b) => a - b);

const flattenAndSort = array => sorti(make(array));