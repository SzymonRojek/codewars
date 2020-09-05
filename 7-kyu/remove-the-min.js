



/*


Given an array of integers, remove the smallest value. Do not mutate the original array/list. 

If there are multiple elements with the same value, remove the one with a lower index. 

If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.

Examples
removeSmallest([1,2,3,4,5]) = [2,3,4,5]
removeSmallest([5,3,2,1,4]) = [5,3,2,4]
removeSmallest([2,2,1,2,1]) = [2,2,2,1]

*/

// Answer: Firstly I have created a function which is mutating an array by using splice method. The main problem is that I have to remove the minimum number only once!

function removeSmallest(array) {

  const min = Math.min(...array);

  const index = array.indexOf(min);

  if (index > -1) {
   array.splice(index, 1);
  } 
  // I do not have to use it here an if statement
 
  return array;
}

console.log(removeSmallest([1, 2, 3, 4, 1, 5])); // result  [2, 3, 4, 1,  5]
console.log(removeSmallest([5, 3, 4, 3])); // result [5, 4, 3,]
console.log(removeSmallest([2, 2, 1, 2, 1])); // result [2, 2, 2, 1]
console.log(removeSmallest([])); // result []


// 2 Secondly I have used the method filter which doesn't mutate an array and I have removed the minimum number only once!

function removeSmallest(array) {

  const min = Math.min(...array);
  
  return array.filter((_, idx, arr) => idx !== arr.indexOf(min));
}