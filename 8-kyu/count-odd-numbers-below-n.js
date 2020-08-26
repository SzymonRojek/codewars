



/*
// Count Odd Numbers below n

Description:
Given a number n, return the number of positive odd numbers below n, EASY!

oddCount(7) //=> 3, i.e [1, 3, 5]
oddCount(15) //=> 7, i.e [1, 3, 5, 7, 9, 11, 13]
*/




// 1  

cont oddCount = n => Math.floor(n / 2); 


console.log(oddCount(7)); // 3
console.log(oddCount(15)); // 7
console.log(oddCount(15023)); //  7511
console.log(oddCount(100)); // 50




// 2

const oddCount = n => (n - n % 2) / 2; 



// 3

function oddCount(n) {
  
  let arr = [];

  String(n).split().forEach(num => num % 2 === 0 ? arr.push(num/2 + 0.0) : arr.push(num/2 - 0.5));

  return +arr;
}




// 4

function oddCount(n) {
  
  let arr = [];
 
  n = String(n).split();

  n.forEach(num => {
    if(num % 2 === 0) {
      arr.push(num / 2 + 0.0)
    } else {
      arr.push(num / 2 - 0.5)
    }
   
  })

  return Number(arr)
}




// 5

const oddCount = n => +String(n).split().map(num => (num%2===0) ? (num/2 + 0.0) : (num/2 - 0.5));



// 6

const oddCount = n => parseInt(n / 2);




// 7

function oddCount(n){
  
  const returnArray = [];

  for(let i = 1; i < n; i = i+2) {
    returnArray.push(i);
  }

  return returnArray.length;
}

/*
There is a FATAL ERROR: CALL_AND_RETRY_LAST Allocation failed - JavaScript heap out of memory - in this solution 7.
*/



// 8

function oddCount(n) {
  const odd = Math.round((n - 1) / 2);

  return odd;
}