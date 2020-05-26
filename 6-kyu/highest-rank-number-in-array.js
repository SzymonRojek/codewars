


/*
Description:
Complete the method which returns the number which is most frequent in the given input array. 
If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.

Examples
[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3
*/



// 1:

function highestRank(arr) {
  const counts = {};
   
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }
  
  const max = Math.max(...Object.values(counts));
  const nums = [];
  
  for (const num in counts) {
    const count = counts[num];
    
    if (count == max)
      nums.push(num);
  }
  
  return Math.max(...nums);
}


  console.log(highestRank([3, 10, 8, 7, 4, 10, 3])); // 10  
  console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10])); // 12   
  console.log(highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10] )); // 3   
          



// 2:

function highestRank(arr){
  return arr.sort((a,b)=>arr.filter(i=>i===b).length - arr.filter(i=>i===a).length)[0];
}



// 3:

  
function highestRank(arr) {
  const counts = {};
 
// 1. Counting frequency of numbers and creating an object: key is a number, value is a frequency

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];

    // counts[num] = counts[num] ? counts[num] + 1 : 1
    counts[num] = (counts[num] || 0) + 1;
  }
  
    // for example: { 4: 1, 6: 1, 7: 1, 8: 1, 10: 3, 12: 3 }


// 2. Get max value from an object
  const maxValue = Math.max(...Object.values(counts)); // 3

// 3. Creating an array: 
  const nums = []; // [10, 12]

  for (const num in counts) {
    // num: 4, 6, 7, 8, 10, 12  <= keys from an object

    const count = counts[num];   // count: 1, 1, 1, 1, 3, 3  <= value from an object

    if (count === maxValue)
      nums.push(parseInt(num));
      }

     
  return Math.max(...nums); // 12
}

  
  console.log(highestRank([3, 10, 8, 7, 4, 10, 3])); // 10  
  console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10])); // 12   
  console.log(highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10] )); // 3   




// 4:

function highestRank(arr){
  let high,max=0,rec={}
  for(let x of arr){
    rec[x]=(rec[x]||0)+1
    if(rec[x]>max){
      max=rec[x]
      high=x
    }
  }
  return high
}