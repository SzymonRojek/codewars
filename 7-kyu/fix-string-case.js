



/*
Description:
In this Kata, you will be given a string that may have mixed uppercase 
and lowercase letters and your task is to convert that string to either 
lowercase only or uppercase only based on:

make as few changes as possible.
if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
For example:

solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
*/



// 1:

function solve(str){
  let countUpperCase = 0, countLowerCase = 0;
  
  for(let i = 0; i < str.length; i++) {
    if(/[A-Z]/.test(str.charAt(i))) {
      countUpperCase++;
    } else {
      countLowerCase++;
    }
  }

  return countUpperCase > countLowerCase? str.toUpperCase() : str.toLowerCase();
}

console.log(solve("code")); // "code"
console.log(solve("CODe")); // "CODE"
console.log(solve("COde")); // "code"
console.log(solve("Code")); // "code"




// 2:

function solve(str) {
  let lowerC = 0;
  let upperC = 0;

  for( let i = 0; i < str.length; i++) {

    if( str[i] == str[i].toUpperCase()){
      upperC++;
    } else {
      lowerC++;
    }
  }
  
  return lowerC >= upperC ? str.toLowerCase() : str.toUpperCase();
}



// 3:

function solve(str){
  const upper = str.split('').filter(x => x === x.toUpperCase()).length;

  const lower = str.length - upper;

  return (upper > lower) ? str.toUpperCase() : str.toLowerCase(); 
}



// 4:

function solve(str){
  let c = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) c++;
  }
  
  return (c > str.length/2) ? str.toUpperCase() : str.toLowerCase()
}



// 5:

const solve = s => {

  const lowerCaseLetters = s.split('').reduce((a, c) => {
    if(c === c.toLowerCase()) a++
    return a
  }, 0);
  
  return lowerCaseLetters >= s.length / 2 ? s.toLowerCase() : s.toUpperCase();
}