


/*

Description:
In this Kata, you will be given two strings a and b and your task will be to return the characters 
that are not common in the two strings.

For example:

solve("xyab","xzca") = "ybzc" 
--The first string has 'yb' which is not in the second string. 
--The second string has 'zc' which is not in the first string. 

*/


// 1

function solve(a, b) {
  let arrayA = [...a];
  let arrayB = [...b];
  let str = '';
  
  arrayA.forEach(a => {
    if (! arrayB.includes(a) ) {
      str += a;
    } 
  })

  arrayB.forEach(b => {
    if (! arrayA.includes(b) ) {
      str += b;
    } 
  })
  
  return str;
};


console.log(solve("xyab","xzca")); // 'ybzc'
console.log(solve("xyabb","xzca")); // ybbzc
console.log(solve("abcd","xyz")); // abcdxyz
console.log(solve("xxx","xzca")); // zca




// 2

function solve(a, b){
  return (a + b).split('').filter(c => ! a.includes(c) || ! b.includes(c)).join('');
 };



 // 3

const solve = (a, b) => [...a, ...b].reduce((acc, cur) => (
  acc += a.includes(cur) && b.includes(cur) ? '' : cur
), '');



// 4

function solve(a, b){
  let result = '';
  a.split('').forEach(charFromA => {
      if (!b.includes(charFromA)) {
          result = result + charFromA;
      }
  });

  b.split('').forEach(charFromB => {
      if (!a.includes(charFromB)) {
          result = result + charFromB;
      }
  });
  
 return result;
};