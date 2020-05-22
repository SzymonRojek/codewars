


/*
Description:
Implement a function that returns the minimal and the maximal value of a list (in this order).
*/
 

// 1:

function getMinMax( arr ){
  let newArr = [];
 
  newArr.push(Math.min(...arr), Math.max(...arr));
 // return [Math.min(...arr), Math.max(...arr)];
  
 return newArr;
};
  
console.log(getMinMax([1])); // [1, 1]
console.log(getMinMax([5, 11, 6, 7, 8, 24, 11, 13, 12, 14, 19, 20, 22, 23])); // [5, 24]
console.log(getMinMax([34, 1])); // [1, 34]
 
 

// 2: sort and length:
 
function getMinMax( arr ){
 
  const ascArr = arr.sort((a, b) => a - b);
 
  return [ascArr[0], ascArr[ascArr.length -1]];
};
 


// 3: 

function getMinMax( arr ){
  const newArr = [];
 
  // get min value
    for (let i = 0; i < arr.length; i++) {
      const num = arr[i];
        let min;
 
        if(!min || num < min) {
          min = num;
        }
 
      newArr.push(min);
    }
 
  // get max value
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
      let max;
 
      if(!max || num > max) {
        max = num;
      }
 
    newArr.push(max);
  }
 
  newArr.sort((a, b) => a - b);
 
  return [newArr[0], newArr[newArr.length -1]];
}
 
console.log(getMinMax([1])); // [1, 1]
console.log(getMinMax([5, 11, 6, 7, 8, 24, 11, 13, 12, 14, 19, 20, 22, 23])); // [5, 24]
console.log(getMinMax([34, 1])); // [1, 34]
console.log(getMinMax([20,15,4,9,15,2])); // [2, 20]