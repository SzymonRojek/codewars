


/*

It happened decades before Snapchat, years before Twitter and even before Facebook. Targeted advertising was a bit of a challenge back then. 
One day, the marketing professor at my university told us a story that I am yet to confirm using reliable sources. 
Nevertheless, I retold the story to dozens of my students already, so, sorry BMW if it is all a big lie.

Allegedly, BMW, in an attempt to target the educated, produced billboard posters 
featuring the English alphabet with three letters missing: B, M and W. 
Needless to say, many were confused, some to the extent of road accidents.

Your task is to write a function that takes one parameter str that MUST be a string and
removes all capital and small letters B, M and W. 
If data of the wrong data type was sent as a parameter the function must throw an error (IllegalArgumentException in Groovy): 
"This program only works for text."

For Python here's a good resource you might need for the exception type ;)

*/


// 1

function removeBMW(str) {

  if(typeof str !== 'string') throw new Error('This program only works for text.');

   const newArr = [];

  [...str].forEach( char => {
    if(!(char === 'b' || char === 'm' || char === 'w' || char === 'B' || char === 'M' || char === 'W')) {
      newArr.push(char);
    }
  })
 
 return newArr.join('');
}

console.log(removeBMW("bmwvolvoBMW")); // "volvo"
console.log(removeBMW("blablahblah")); // "lalahlah"
console.log(removeBMW([])); // "lalahlah"



// 2

function removeBMW(str) {
  if(typeof str === 'string') {
      return str.replace(/[bmwBMW]/g,'');
  } else {
    throw new Error('This program only works for text.');
  }
}



// 3

function removeBMW(str) {
  if(typeof str !== 'string') {
    throw new Error('This program only works for text.');
  } else {
    return str.replace(/[bmwBMW]/g,'');
  }
}

// 4

function removeBMW(str) {
  if(typeof str !== 'string') {
    throw new Error('This program only works for text.');
  }
    
  return str.replace(/[bmwBMW]/g,'');
}



// 5

function removeBMW(s) {
  try {
    return s.replace(/[bmw]/gi, '');
  } catch (err) {
    throw new SyntaxError("This program only works for text.");
  };
}



// 6

function removeBMW(str){
  if (typeof str !== "string") throw new Error("This program only works for text.");

  const arr = [...str];

  for (let i = arr.length - 1; i >= 0; i--) {
    const char = str[i];

    if (char === 'b' || char === 'm' || char === 'w' || char === 'B' || char === 'M' || char === 'W') {
      arr.splice(i,1);
    }
  }

  return arr.join('');
}


// 7

function removeBMW(str){
  if (typeof str !== "string") throw new Error("This program only works for text.");

  const arr = [...str];
  const specificChar ='bmwBMW';

  return arr.filter( char => !specificChar.includes(char)).join('');
}


// 8

function removeBMW(str){
  if (typeof str !== 'string')
    throw new Error('This program only works for text.');

  return [...str].filter( char => {
    const upperEl = char.toUpperCase();

    if(upperEl === 'B' || upperEl === 'M' || upperEl === 'W')
      return false;
    else
      return true;
  }).join('');
}



// 9

function removeBMW(str){
  if (typeof str !== 'string')
    throw new Error('This program only works for text.');

  const noBMW = [...str].filter( char => char !== 'B' && char !== 'M' && char !== 'W' && char !== 'b' && char !== 'm' && char !== 'w');

  return noBMW.join('');
}



// 10

function removeBMW(str){
  let specChar = ['b', 'm', 'w', 'B', 'M', 'W'];
  return [...str].filter( char => !specChar.includes(char)).join('');
}



// 11

function removeBMW(str){
  let specChar = ['b', 'm', 'w'];
  return [...str].filter( char => !specChar.includes(char.toLowerCase())).join('');
}



// 12

const removeBMW = str => [...str].filter( char => !['b', 'm', 'w'].includes(char.toLowerCase())).join('');
