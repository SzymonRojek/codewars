



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



// 5

function isIsogram(str) {
  str = str.toLowerCase();
  
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str.charAt(i), i + 1) >= 0) {
      return false;
    }
  }
  
  return true;
}


// 6

function isIsogram(str) {
  let map = {};
  let result = true;

  str.split('').forEach(function(char) {
    if (map[char.toUpperCase()] === undefined) {
      map[char.toUpperCase()] = 1;
    } else {
      result = false;
    }
  });
  
  return result;
}


// just trying objects {}


function isIsogram(str) {
  
  let myObj = {};
 
  [...str].forEach(v => {
 
   if(myObj[v] === undefined) {
     myObj[v] = 0;
   } else {
     myObj[v] = 1;
   }
  })
 
  let arr = Object.values(myObj);
  
  let flag = true;
 
  arr.forEach(num => {
   if(num !== 1) {
     // flag
   } else {
     flag = false
   }
 })
 
 return flag
 
 }
 console.log(isIsogram('maase')); // false
 console.log(isIsogram('mose')); // true
 
 