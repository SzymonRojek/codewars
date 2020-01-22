

/*  Description:
I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. 
I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.  */



//  1

const arrayPlusArray = (arr1, arr2) => arr1.concat(arr2).reduce((a, b) => a + b, 0);

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6])); // 21
console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6])); // -21
console.log(arrayPlusArray([0, 0, 0], [4, 5, 6])); // 15
console.log(arrayPlusArray([100, 200, 300], [400, 500, 600])); // 2100



//  2

const arrayPlusArray = (...arrays) => [].concat(...arrays).reduce((a, b) => a + b, 0);



//  3

const arrayPlusArray = (arr1, arr2) => {
  const arr = [...arr1, ...arr2];
  return arr.reduce((a, b) => a + b);
};



//  4

const arrayPlusArray = (arr1, arr2) => {
  const join = arr1.concat(arr2);

  const result = (a, b) => a + b;
  return join.reduce(result);
};



//  5

const arrayPlusArray = (arr1, arr2) => {
  let suma = 0;
  for (var i = 0; i < arr1.length; i++) suma += arr1[i];
  for (var i = 0; i < arr2.length; i++) suma += arr2[i];
  return suma;
};