


/*
Description:
You are given an array of non-negative integers, your task is to complete the series from 0 to the highest number in the array.

If the numbers in the sequence provided are not in order you should order them, 
but if a value repeats, then you must return a sequence with only one item, 
and the value of that item must be 0. like this:

inputs        outputs
[2,1]     ->  [0,1,2]
[1,4,4,6] ->  [0]
Notes: all numbers are positive integers.

This is set of example outputs based on the input sequence.

inputs        outputs
[0,1]   ->    [0,1]
[1,4,6] ->    [0,1,2,3,4,5,6]
[3,4,5] ->    [0,1,2,3,4,5]
[0,1,0] ->    [0]
*/


// 1:

function completeSeries( arr ) {
 
  arr = arr.sort((a, b) => a - b)
 
  const last = arr[arr.length -1];
    const duplicates = new Set(arr).size !== arr.length;
 
        if(duplicates) return [0];
 
    let newArr = [];
        for (let i = 0; i < last + 1; i++) {
            newArr.push(i);
        }
 
  return newArr;
}
 
console.log(completeSeries([0,1])); // [0,1]
console.log(completeSeries([1,4,6])); // [0,1,2,3,4,5,6]
console.log(completeSeries([3,4,5])); //  [0,1,2,3,4,5]
console.log(completeSeries([2,1])); // [0,1,2],
console.log(completeSeries([1,4,4,6])); // [0];



// 2:

function completeSeries(arr) {

  const maxValue = Math.max(...arr);
  const duplicates = new Set(arr).size !== arr.length;
  
    if(duplicates) return [0];

   let newArr = [];
    for (let i = 0; i < maxValue + 1; i++) {
     newArr.push(i); 
    }

  return newArr;
}