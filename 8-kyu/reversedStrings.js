// Complete the solution so that it reverses the string value passed into it:


// 1

const solution = x => x.split('').reverse().join('');

console.log(solution('world')) // 'dlrow'


// 2

let solution = x => [...x].reverse().join('');


// 3

const solution = str => {
  if (str === "")
    return "";
  else
    return solution(str.substr(1)) + str.charAt(0);
}

console.log(solution('yeah')) // haey


// 4

function solution(str){
  return str.length > 0 ? solution(str.substring(1)) + str.charAt(0) : '';
}

console.log(solution('morning')) // gninrom


// 5

function solution(str) {
 
  let splitString = str.split(''); 
  
  let reverseArray = splitString.reverse();
  
  let joinArray = reverseArray.join('');
  
  return joinArray;
  
}
console.log(solution('hello')) // olleh


// 6

function solution(str){

  let reversed = '';

  for (let i=str.length-1; i>=0; i--){

  const letter = str[i];

  reversed += letter;

 }

 return reversed;

 }

console.log(solution('ja')) // aj

/* explination: 

why i=str.length-1
starts from the last element in the array/ but always we are counting from 0, that is a reason why is -1. For instance length of array is 6 - but last element in the array is [5]

i--
it is looping on the other way 

*/


// 7 

function solution(str){
  let j = '';

  for(let i = str.length - 1; i >= 0; i--){
    j = j + str[i];
  }
  
  str = j;
  return str;
}

console.log(solution('Poland')); // dnaloP