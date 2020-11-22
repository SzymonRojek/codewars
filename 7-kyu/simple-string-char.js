

/*
Description:
In this Kata, you will be given a string and your task will be to return a list 
of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
--the order is: uppercase letters, lowercase, numbers and special characters.
*/


// 1: My solution

function solve(s){
  
  s = s.split('');

  let finalArr = [];
  let checkUpper = 0;
  let checkLower = 0;
  let checkNumber = 0;
  let checkCharacter = 0;

  let specChar = "^[|~`\"\'{}:;<>!€‹™@#$%\/&*?,()+=._-]";
  specChar = specChar.split('');


  s.forEach(el => {
    if(/^[A-Z]*$/.test(el)) checkUpper++;
    if(/^[a-z]*$/.test(el)) checkLower++;
    if(/^[0-9]*$/.test(el)) checkNumber++;

    specChar.forEach(char => el === char?  checkCharacter++ : null)
  });

  finalArr.push(checkUpper, checkLower, checkNumber,checkCharacter);

  return finalArr;
 }


console.log(solve("Codewars@codewars123.com")); // [1,18,3,2]
console.log(solve("bgA5<1d-tOwUZTS8yQ")); // [7,6,3,2]
console.log(solve("P*K4%>mQUDaG$h=cx2?.Czt7!Zn16p@5H")); // [9,9,6,9]
console.log(solve("RYT'>s&gO-.CM9AKeH?,5317tWGpS<*x2ukXZD")); // [15,8,6,9]
console.log(solve("$Cnl)Sr<7bBW-&qLHI!mY41ODe")); // [10,7,3,6]
console.log(solve("@mw>0=QD-iAx!rp9TaG?o&M%l$34L.nbft")); // [7,13,4,10]




// 2: my solution

function solve(s){
  
  s = s.split('');

  let finalArr = [];
  let checkUpper = 0;
  let checkLower = 0;
  let checkNumber = 0;
  let checkCharacter = 0;

  s.forEach(el => {
    if(/^[A-Z]*$/.test(el)) checkUpper++;
    if(/^[a-z]*$/.test(el)) checkLower++;
    if(/^[0-9]*$/.test(el)) checkNumber++;
  });

  
  let specChar = "^[|~`\"\'{}:;<>!€‹™@#$%\/&*?,()+=._-]";
  specChar = specChar.split('');

  for (let i = 0; i < s.length; i++) {
    const el = s[i];

    for (let j = 0; j < specChar.length; j++) {
      const char = specChar[j];
      
      if(el === char) checkCharacter++;
    }
  }
 
  finalArr.push(checkUpper, checkLower, checkNumber,checkCharacter);

  return finalArr;
 }

