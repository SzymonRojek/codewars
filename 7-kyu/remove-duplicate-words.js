

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



//  2

const removeDuplicateWords = s => [...new Set(s.split(' '))].join(' ');



//  3

const removeDuplicateWords = s => {
  const set = new Set(s.split(' '));
  return Array.from(set).join(' ');
};



//  4

function removeDuplicateWords(s) {
  return s
          .split(' ')
          .filter((n, i, s) => s.indexOf(n) === i)
          .join(' ');
}


