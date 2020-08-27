



/*

// Highest and Lowest

In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Example:

highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes:

All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.

*/


// 1

const highAndLow = num => [Math.max(...num.split(' ')), ' ', Math.min(...num.split(' '))].join('');

console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6")); // "542 -214"




// 2

function highAndLow(numbers){
  numbers = numbers.split(' ').map(Number);

  // Math.max.apply(null, arr) + ' ' + Math.min.apply(null, arr);
  return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
}




// 3

function highAndLow(numbers) {
  numbers = numbers.split(' ').map(Number);
  
  const min = Math.min.apply(null, numbers);
  const max = Math.max.apply(null, numbers);
  
  return max + ' ' + min;
}




// 4

function highAndLow(numbers) {
  const arr = numbers.split(' ').sort((a, b) => a - b);
  
  return arr[arr.length -1] + ' ' + arr[0];
}




// 5

function highAndLow(numbers){

  const arr = numbers.split(' ');
  let max = Number(arr[0]);
  let min = Number(arr[0]);
  
  
  for(let i = 1; i < arr.length; i++) {
  
    let num = Number(arr[i]);
    
    if(num > max) max = num;
    if(num < min) min = num;
  }
  
    return max + " " + min;
}