



/*
Description:
Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order
of the strings of a1 which are substrings of strings of a2.

#Example 1: a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]

#Example 2: a1 = ["tarp", "mice", "bull"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns []

Notes:
Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.

In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.

Beware: r must be without duplicates.
Don't mutate the inputs.
*/ 



// 1


function inArray(arr1, arr2){
  return arr1.filter( ending => arr2.some( word => word.includes(ending))).sort();
}

let a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

let a1 = ["xyz", "live", "strong"]
console.log(inArray(a1, a2)); // ["live", "strong"]
a1 = ["live", "strong", "arp"]
console.log(inArray(a1, a2)); // ["arp", "live", "strong"]
a1 = ["tarp", "mice", "bull"]
console.log(inArray(a1, a2)); // []



// 2

function inArray(arr1, arr2){
  
  const result = [];

  arr2.forEach( word => {

    for (let i = arr1.length-1; i >= 0; i--) {
      const ending = arr1[i];

      if(word.includes(ending)) {
        arr1.splice(i, 1);
        result.push(ending);
        break;
      }
    }
  });

  return result.sort();
}



// 3

function inArray(arr1, arr2){
  
  const result = [];

  arr2.forEach( word => {

    arr1.forEach( (ending, i) =>{

      if(word.includes(ending)) {
    
        result.push(ending);
      }
    });
  });

  return [...new Set(result)].sort();
}



// 4

function inArray(arr1, arr2) {

  return arr1.filter(end => arr2.join(' ').indexOf(end) !== -1);
}



// 5

function inArray(arr1, arr2) {
  return arr1.filter(end => arr2.find(word => word.match(end))).sort();
}



// 6

function inArray(arr1, arr2) {

  const result = [];
  
  for (let i = 0; i < arr1.length; i++) {
    const char = arr1[i];
    
    for (let j = 0; j < arr2.length; j++) {
      const word = arr2[j];
      
      if (word.indexOf(char) !== -1) {
        result.push(char);
      }
    }
  }
  
  return [...new Set(result)].sort();
}