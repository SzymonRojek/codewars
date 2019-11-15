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