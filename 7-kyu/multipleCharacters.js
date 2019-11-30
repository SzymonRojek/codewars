/*  Description:
Here we have a function that help us spam our hearty laughter. 
But is not working! I need you to find out why...

Expected results:

spam(1);  // hue
spam(6);  // huehuehuehuehuehue
spam(14); // huehuehuehuehuehuehuehuehuehuehuehuehuehue */



//  1

const spam = number => {

  var repeatedString = "";
  let string = 'hue';

  while (number > 0) {
    repeatedString += string;
    number--;
  }

  return repeatedString;

}
console.log(spam(2)); // huehue



//  2


const spam = number => Array(++number).join("hue");

console.log(spam(2)); // huehue



//  3

const spam = number => "hue".repeat(number);

console.log(spam(2)); // huehue



//  4

const spam = number => new Array(number + 1).join('hue');

console.log(spam(2)); // huehue



//  5


const spam = number => {
  let o = '';
  
  while(number--){o += 'hue'}
  return o;
}

console.log(spam(2)); // huehue



//  6

const spam = n => "hue".repeat(n);

console.log(spam(2)); // huehue



//  7

const spam = number => (number != 0)? 'hue' + spam(number - 1) : '';

console.log(spam(2)); // huehue