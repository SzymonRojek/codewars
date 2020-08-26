



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