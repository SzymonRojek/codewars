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



// 8

const spam = number => {

  let word = '';

  while (number-- > 0) word += 'hue';
  
  return word;
}

console.log(spam(2)); // huehue



//  9

const spam = number => {

  let message = '';

    //TODO: Not returning the expected value.

    for (let x = 0; x < number; x++) {
        message += 'hue';
     }

     return message;
  }

console.log(spam(2)); // huehue



// 10



const spam = n => {

  let string = '';

  for(var i = 0; i < n; i++) string += 'hue';

  return string;
}

console.log(spam(2)); // huehue



//  11

const spam = n => {

  let str = '';
  let i = 0;
  
  while(i < n){
      str+= 'hue ';
      i++;
      
  }

  /* while(n > i){
      str+= 'hue ';
      n--;
  } */

  return str;
}

console.log(spam(2)); // hue hue



//  12

const spam = number => {

  let arr = [];

  while (arr.length < number) {

      arr.push('hue');
  }

  return arr.join('');
}

console.log(spam(2)); // huehue



// 13

const spam = number => {
 
  const list = [];

  let i = 0;

  while(i < number){
    i++;
    list.push('hue');
    /*
    or I can write: 

    list.push('hue);
    number--;
    */
  }
  
  return list.join('');
}

console.log(spam(2)); // huehue



//  14

let str = 'hue';

const spam = number => {

  let result = str.repeat(number);
  
  return result
}

console.log(spam(2)); // huehue


