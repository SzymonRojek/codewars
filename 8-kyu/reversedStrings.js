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