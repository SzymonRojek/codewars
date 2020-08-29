



/*

Grasshooper-summation

Write a program that finds the summation of every number from 1 to num. 
The number will always be a positive integer greater than 0.

For example:

summation(2) -> 3
1 + 2

summation(8) -> 36
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

*/




// 1

const summation = num => {
  
  let sum = 0;

  for (let i = 0; i < num; i++) {
    const number = i+1;

    sum += number;
  }
 
  return sum;
}
 
console.log(summation(1)); // 1
console.log(summation(8)); // 36




// 2

const summation = num => {
  
  let sum = 0;

  for (let i = 0; i <= num; i++) {
    const number = i;

    sum +=number;
  }
 
  return sum;
}