



/*
Counting sheep:

Consider an array/list of sheep where some sheep may be missing from their place. 
We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined
*/



// 1

function countSheeps(arrayOfSheep) {
  
  let countSheeps = 0;

  arrayOfSheep.forEach(sheep => sheep === true? countSheeps++ : false);

  
  return `There are ${countSheeps} sheeps in total`; 
}

const array1 = [true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true ];

console.log(countSheeps(array1)); // "There are 17 sheeps in total"




// 2

function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}



// 3

function countSheeps(arrayOfSheep) {
  
  let num = 0;
  
  for(let i = 0; i < arrayOfSheep.length; i++) {
    let bool = arrayOfSheep[i];
    
    if(bool === true) num++;
  }
      
  return num;
}