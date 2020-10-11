

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



// 2

function add(num1, num2) {
  const snum1 = [...String(num1)].map(Number).reverse();
  const snum2 = [...String(num2)].map(Number).reverse();
  const max = Math.max(snum1.length, snum2.length);
  const result = [];

      for (let i = 0; i < max; i++) {
          result.push( (
            snum1[i] !== undefined ? snum1[i] : 0)
              + 
            (snum2[i] !== undefined ? snum2[i] : 0))
      }

  return +result.reverse().join('');
}



// 3

function add(num1, num2) {
  const nums1 = [...String(num1)];
  const nums2 = [...String(num2)];
 
  let newArray = [];
  
  const num = Math.abs(nums1.length - nums2.length);

  if (nums1.length > nums2.length) {
    for(let i = 0; i < num; i++) {
      nums2.unshift(0);
    }
  } else if (nums1.length < nums2.length) {
    for(let i = 0; i < num; i++) {
      nums1.unshift(0);
    }
  }

  for(let i = 0; i < nums1.length; i++) {
    newArray.push(Number(nums1[i]) + Number(nums2[i]));
  }
  
  return Number(newArray.join(''));
}



// 4

const digits = n => [...String(n)].map(Number).reverse();

function add(num1, num2) {
  const max = digits(Math.max(num1, num2));
  const min = digits(Math.min(num1, num2));
  
  return +max.map((n, i) => n + (min[i] || 0)).reverse().join('')
}



// 5

function add(num1, num2) {
  num1 = [...String(num1)].map(Number).reverse();
  num2 = [...String(num2)].map(Number).reverse();
 
  const maxLength = Math.max(num1.length, num2.length);
  let result = [];
  
  for (let i = 0; i < maxLength; i++) {
      if (num1[i] === undefined) {
          result.push(num2[i]);
      } else if (num2[i] === undefined) {
          result.push(num1[i]);
      } else {
          result.push(num1[i] + num2[i]);
      }
  }
  return Number(result.reverse().join(''));
}