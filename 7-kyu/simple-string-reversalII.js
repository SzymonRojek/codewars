


/*
In this Kata, you will be given a string and two indexes (a and b). 
Your task is to reverse the portion of that string between those two indices inclusive.

solve("codewars",1,5) = "cawedors" -- elements at index 1 to 5 inclusive are "odewa". So we reverse them.
solve("cODEWArs", 1,5) = "cAWEDOrs" -- to help visualize.
Input will be lowercase and uppercase letters only.

The first index a will always be lower that than the string length; 
the second index b can be greater than the string length. 
More examples in the test cases. Good luck!
*/



// 1:

function solve(str, from, to){
  const reverse = str.split('').splice(from, to - from + 1).reverse().join('');
  
  const cutStr  = [
    str.substring(0, from),
    str.substring(to + 1)
  ];
  
  return cutStr[0] + reverse + cutStr[1];
}


console.log((solve("codewars",1,5))); // "cawedors"
console.log((solve("codingIsFun",2,100))); // "conuFsIgnid"
console.log((solve("FunctionalProgramming", 2, 15))); // "FuargorPlanoitcnmming"
console.log((solve("abcdefghijklmnopqrstuvwxyz",0,20))); // "utsrqponmlkjihgfedcbavwxyz"
console.log((solve("abcdefghijklmnopqrstuvwxyz",5,20))); // "abcdeutsrqponmlkjihgfvwxyz"
