


/*
Description:
Finish the solution so that it sorts the passed in array of numbers. 
If the function passes in an empty array or null/nil value then it should return an empty array.

For example:

solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
solution(null); // should return []
*/ 



// 1 

const solution = nums => {

  return Array.isArray(nums) ? nums.reduce((acc, val) => {
 
     if(acc.length) {
       let temp = [];
 
       while(acc[acc.length -1] > val) {
       temp.push(acc.pop());
       } 
 
         acc.push(val);
 
       while(temp.length) {
       acc.push(temp.pop());
       }
     } else {
         acc.push(val);  
       }
 
   return acc;
   
   }, []) : [];
 
 }
 
 console.log(solution()); // []
 console.log(solution(null)); // []
 console.log(solution([5,4,3,1,2])); // [1,2,3,4,5]



 // 2

 function solution(nums){
  if( nums === null || nums === undefined) {
    return []
  } else {
    return nums.sort((a, b) =>a - b);
  }
 
 }


 
 // 3

 const solution = nums => nums === null || nums === undefined ? [] : nums.sort((a, b) =>a - b);