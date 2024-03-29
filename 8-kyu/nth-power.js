



/*
Nth power

Description:
This kata is from check py.checkio.org

You are given an array with positive numbers and a number N. 
You should find the N-th power of the element in the array with the index N. 
If N is outside of the array, then return -1. 
Don't forget that the first element has the index 0.

Let's look at a few examples:

array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.

*/



// 1

function index(array, n){
  
  if(n > array.length) return -1;

  return n < array.length ? Math.pow(array[n], n) : -1
}


console.log(index([1, 2, 3, 4],2)); // 9
console.log(index([1, 3, 10, 100],3)); // 1000000
console.log(index([0, 1],0)); // 1
console.log(index([1, 2],3)); // -1
console.log(index([0], 0)); // 1
console.log(index([1,1,1,1,1,1,1,1,1,1], 9)); // 1
console.log(index([1,1,1,1,1,1,1,1,1,2], 9)); // 512
console.log(index([29,82,45,10], 3)); // 1000
console.log(index([6,31], 3)); // -1
console.log(index([75,68,35,61,9,36,89,0,30], 10)); // -1



// 2

const index = (array, n) => n < array.length ? Math.pow(array[n], n) : -1;




// 3

function index(array, n){
 
  return array[n] ** n || -1;
}