

/*

For this Kata you will have to forget how to add two numbers together.

For example: 

 248
+ 
 208
------ 
4416

*/


// 1

function add(num1, num2) {
  const arr1 = [...String(num1)].map(Number).reverse();
  const arr2 = [...String(num2)].map(Number).reverse();
  
  let result = [];

  for (let i = 0; i < Math.max(arr.length, arr2.length); i++) {

    result.push((arr1[i] || 0) + (arr2[i] || 0));
  }


  return +result.reverse().join('');
}
console.log(add(122, 81)); //  1103
console.log(add(248, 208)); // 4416
console.log(add(2, 11)); // 13
console.log(add(0, 1)); // 1
console.log(add(0, 0)); // 0
console.log(add(16, 18)); // 214
console.log(add(26, 39)); //  515
console.log(add(1222, 30277)); //  31499
console.log(add(1236, 30977)); // 31111013
console.log(add(38810, 1383)); // 391193
console.log(add(49999, 49999)); //  818181818
