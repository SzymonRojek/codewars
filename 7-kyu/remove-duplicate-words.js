

/*
Description:
Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

Example:

Input:

'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:

'alpha beta gamma delta'
*/



// 1

function removeDuplicateWords(s) {
  const str = s.split(' ');
  const result = [];
  for (let i = 0; i < str.length; i++) {
          if (result.indexOf(str[i]) === -1) {
                  result.push(str[i]);
          }
  }
  return result.join(' ');
}

console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'));



//  2

const removeDuplicateWords = s => [...new Set(s.split(' '))].join(' ');

console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'));
