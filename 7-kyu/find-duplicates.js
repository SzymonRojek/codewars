/*
Description:
Given an array, find the duplicates in that array, and return a new array of those duplicates. The elements of the returned array should appear in the order when they first appeared as duplicates.

Note: numbers and their corresponding string representations should not be treated as duplicates (i.e., '1' !== 1).
*/



//  1

const duplicates = arr => {
  const duplicates = arr.reduce(function(acc, el, i, arr) {
          if (arr.indexOf(el) !== i && acc.indexOf(el) < 0) acc.push(el);
          return acc;
  }, []);
  return duplicates;
};

console.log(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3, '5'])); // [1, 3, 4]