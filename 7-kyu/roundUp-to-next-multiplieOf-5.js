


/*
Description:
Given an integer as input, can you round it to the next (meaning, "higher") 5?

Examples:

input:    output:
0    ->   0
2    ->   5
3    ->   5
12   ->   15
21   ->   25
30   ->   30
-2   ->   0
-5   ->   -5
etc.
Input may be any positive or negative integer (including 0).

You can assume that all inputs are valid integers.
*/ 



// 1:

function roundToNext5(n){
  let result = [];
 
  // positives num
    for (let i = 0; i < n;  i += 5) {
      result.push(i+5);
    }
 
  // negatives num
    for (let i = 0; i >= n; i -= 5) {
      result.push(i);  
    }
 
 return (n === 0) ? 0 : result[result.length-1];
}

console.log(roundToNext5(0)); // 0
console.log(roundToNext5(4)); // 4
console.log(roundToNext5(6)); // 10
console.log(roundToNext5(30)); // 30
console.log(roundToNext5(35)); // 35
console.log(roundToNext5(441)); // 445
console.log(roundToNext5(-1)); // 0
console.log(roundToNext5(-5)); // -5
console.log(roundToNext5(-7)); // -5
console.log(roundToNext5(-12)); // -10



// 2:

function roundToNext5(n){
  return Math.ceil(n/5)*5;
}



// 3:

function roundToNext5(n){
  while(n % 5 !== 0) n++;
  return n;
}



// 4:

const roundToNext5 = n => Math.ceil(n / 5) * 5;



// 5:

function roundToNext5(n){
  if (n % 5 === 0) {
    return n;
  }
  return roundToNext5(n + 1);
}