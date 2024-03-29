



/*

Calculate average

Write function avg which calculates average of numbers in given list.

*/




// 1

const find_average = arr => arr.reduce((a, b) => a + b, 0) / arr.length;

console.log(find_average([1,1,1])); // 1
console.log(find_average([1,2,3])); // 2




// 2

const find_average = arr => arr.reduce((a, b) => a + (b / arr.length), 0);




// 3

function find_average(array) {
  let sum = 0;

  for (i = 0; i < array.length; i++) {
    
    sum += array[i];
  }

  return sum / array.length;
}




// 4

function find_average(array) {
  const total = array.reduce((acc, curr) => acc + curr);
  
  return total / array.length;
}