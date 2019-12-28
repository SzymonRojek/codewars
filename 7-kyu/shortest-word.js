/* 
Description:

Simple, given a string of words, return the length of the shortest word(s). */



//  1

const findShort = s => {
  const wordsArray = s.split(' ');
  const shortestWord = [];
  for (let i = 0; i < wordsArray.length; i++) {
          shortestWord.push(wordsArray[i].length);
  }
  const min = Math.min(...shortestWord);
  return min;
};

console.log(findShort('Hippp a Immm amppp here')); // 1



// 2

const findShort = s => Math.min(...s.split(' ').map(x => x.length));

console.log(findShort('Hippp a Immm amppp here')); // 1