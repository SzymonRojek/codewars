// Complete the solution so that it reverses the string value passed into it:


// 1

const solution = x => x.split('').reverse().join('');

console.log(solution('world')) // 'dlrow'


// 2

let solution = x => [...x].reverse().join('');


