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



//  3

const findLongest = str => {
  const spl = str.split(' ');
  let longest = 0;

  for (let i = 0; i < spl.length; i++) {
          if (spl[i].length > longest) {
                  longest = spl[i].length;
          }
  }
  return longest;
};



//  4

const findLongest = str => str.split(' ').reduce((max, word) => (max > word.length ? max : word.length), 0);



//  5

const findLongest = s =>
        Math.max.apply(
                this,
                s.split(' ').map(a => a.length)
        );



//  6

const findLongest = s => Math.max(...s.split` `.map(v => v.length));



//  7

const findLongest = str => {
        const s = str.split(' ');
        return Math.max(...s.map(num => num.length));
};



//  8

const findLongest = str => str.split` `.sort((a, b) => b.length - a.length)[0].length;