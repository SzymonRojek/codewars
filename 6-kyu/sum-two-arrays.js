


/*

Your task is to create a function called sum_arrays() in Python or addArrays in Javascript, which takes two arrays consisting of integers, and returns the sum of those two arrays.

The twist is that (for example) [3,2,9] does not equal 3 + 2 + 9, it would equal '3' + 
'2' + '9' converted to an integer for this kata, meaning it would equal 329. The output
should be an array of the the sum in a similar fashion to the input (for example, 
if the sum is 341, you would return [3,4,1]). 

Examples are given below of what two arrays should return.

[3,2,9],[1,2] --> [3,4,1]
[4,7,3],[1,2,3] --> [5,9,6]
[1],[5,7,6] --> [5,7,7]
If both arrays are empty, return an empty array.

In some cases, there will be an array containing a negative number as the first index in the array. 

In this case treat the whole number as a negative number. See below:

[3,2,6,6],[-7,2,2,8] --> [-3,9,6,2] # 3266 + (-7228) = -3962

*/


// 1

function addArrays(arr1, arr2) {
  if(arr1.length === 0 && arr2.length === 0) return [];
  if(arr1.length === 0) return arr2;
  if(arr2.length === 0) return arr1;


  const sumStr1 = +arr1.map(num => String(num)).reduce((a, b)=> a+b);
  const sumStr2 = +arr2.map(num => String(num)).reduce((a, b)=> a+b);
  const sumStr = sumStr1 + sumStr2;

  let arr;

  if(sumStr < 0) {
    arr = String(sumStr).split('');
    const delDash = arr.shift()
    const delFirstIdx = arr.shift()
    const add = arr.unshift(-delFirstIdx)
  } else {
    arr = String(sumStr).split('');
  }

 return arr.map(Number)
}

console.log(addArrays([],[])); 
console.log(addArrays([4,7,3],[1,2,3])); 
console.log(addArrays([],[5,7,6])); 
console.log(addArrays([3,2,6,6],[-7,2,2,8])); 
console.log(addArrays([],[-7,2,2,8])); 
console.log(addArrays([3,2,6,6],[]));



// 2

function addArrays(arr1, arr2) {

  if(arr1.length === 0 && arr2.length === 0) return [];
  if(arr1.length === 0) return arr2;
  if(arr2.length === 0) return arr1;

  arr1 = +arr1.join``;
  arr2 = +arr2.join``;

  const sum = arr1 + arr2;
  const result = String(sum).match(/-?\d/g).map(Number);

  return result
}