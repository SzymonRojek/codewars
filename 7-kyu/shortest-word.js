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



// 3

const findShort = s => {
  s = s
          .split(' ')
          .sort((a, b) => b.length - a.length)
          .pop().length;
  const shortestWord = [];
  shortestWord.push(s);
  return +shortestWord;
};

console.log(findShort('bitcoin take over as the')); // 2



//  4 

const findShort = s =>
        s
                .split(' ')
                .sort((a, b) => b.length - a.length)
                .pop().length;

console.log(findShort('bitcoin take over as the')); // 2