



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



// 3

function isIsogram(str){
 
  str = str.toLowerCase();
  for(let i = 0; i < str.length; ++i)


    for(let j = i + 1; j < str.length; ++j)
      if(str[i] === str[j])
        return false;
      
  return true;
}



// 4

function isIsogram(str){
 
  return [...str.toLowerCase()].filter((v, i, arr) => arr.indexOf(v) === i).length == str.length;
}