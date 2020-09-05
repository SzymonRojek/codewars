


/*

String ends with

Description:

Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false

*/



// 1

function solution(str, ending) {
  
  return str.endsWith(ending);
}


console.log(solution('abcde', 'cde')); // true
console.log(solution('abcde', 'abc')); // false



// 2

function solution(str, ending) {

  return str.substr(-ending.length) == ending;
}



// 3

function solution(str, ending) {
  
  return ending === str.substr(str.length - ending.length, str.length);
}



// 4

function solution(str, ending) {
  
  return str.slice(-ending.length).match(ending) ? true : false;
}