/*  Simple challenge - eliminate all bugs from the supplied code 
so that the code runs and outputs the expected value. Output should
be the length of the longest word, as a number.

There will only be one 'longest' word.  */



//  1

const findLongest = str => {
  const wordsArray = str.split(' ');
  const longestWord = [];

  for (let i = 0; i < wordsArray.length; i++) {
          longestWord.push(wordsArray[i].length);
  }

  const max = Math.max.apply(Math, longestWord); // Math.max(...longestWord)
  return max;
};


console.log(findLongest('The quick white fox jumped around the massive dog')); // 7
console.log(findLongest('Take me to tinseltown with you')); // 10
console.log(findLongest('Sausage chops')); // 7
console.log(findLongest('Wind your body and wiggle your belly')); // 6
console.log(findLongest('Lets all go on holiday')); // 7



//  2

const findLongest = s => Math.max(...s.split(' ').map(x => x.length));

