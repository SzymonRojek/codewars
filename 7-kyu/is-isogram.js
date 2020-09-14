



/*
Is isogram

An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
Implement a function that determines whether a string that contains only letters is an isogram. 
Assume the empty string is an isogram. Ignore letter case.

isIsogram("Dermatoglyphics") == true
isIsogram("aba") == false
isIsogram("moOse") == false // -- ignore letter case

*/



// 1


function isIsogram(str){
  const strArr = str.toLowerCase().split('').sort().join('').match(/(.)\1+/g);
  
  return strArr === null;
}

console.log(isIsogram('moose')); // false
console.log(isIsogram('mose')); // true



// 2

function isIsogram(str){
  const noDuplicates = [...new Set(str)].join('');

  return noDuplicates.length === str.length
}