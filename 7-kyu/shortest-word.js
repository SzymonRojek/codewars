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



//  5

const findShort = string => {
        const array = string.split(' ');
        const shortest = [];

        for (let i = 0; i < array.length; i++) {
                shortest.push(array[i].length);
        }
        return Math.min(...shortest);
};

console.log(findShort('bitcoin take over assss the')); // 3



//  6

const findShort = string => {
        const array = string.split(' ');
        let shortest = null;

        for (let i = 0, l = array.length; i < l; ++i) {
                if (shortest == null || array[i].length < shortest) shortest = array[i].length;
        }

        return shortest;
};

console.log(findShort('bitcoin take over assss e')); // 1
