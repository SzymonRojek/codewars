


/*
Description:
Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, 
continue reducing in this way until a single-digit number is produced. 
This is only applicable to the natural numbers.

Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
*/



// 1: my solution

function digital_root(n) {
  n = [...String(n)];
  
  let sum = 0;
    n.forEach(num => sum += Number(num));
  
  let result = 0;
    sum = [...String(sum)];
      sum.forEach(num => result += Number(num));

  let finalResult = 0;
    result = [...String(result)];
      result.forEach(num => finalResult += Number(num));

  return finalResult;
}

console.log(digital_root(16)); // 7
console.log(digital_root(456)); // 6
console.log(digital_root(942)); // 6
console.log(digital_root(132189)); // 6
console.log(digital_root(493193)); // 2




// 2: This solution above is not perfect because what if parameter has got a very long number? Then the best way is to use a recursive function:

function digital_root(n) {
  
  if (n < 10) return n;

  let sum = 0;
  [...String(n)].forEach(num => sum += Number(num));
   
  return digital_root(sum);
}



// 3:

function digital_root(n) {
  return (n - 1) % 9 + 1;
}