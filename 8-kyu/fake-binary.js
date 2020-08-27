



/*

Fake binary

Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. 

Return the resulting string.

*/



// 1

const fakeBin = x => {

  const arr = [];

  [...x].forEach(num => (num < 5) ? arr.push(0) : arr.push(1));

  return arr.join('');
}

console.log(fakeBin('45385593107843568')); //  '01011110001100111'
console.log(fakeBin('509321967506747'));  // '101000111101101'
console.log(fakeBin('366058562030849490134388085')); // '011011110000101010000011011'




// 2

const fakeBin = x => [...x].map(num => (num < 5) ? 0 : 1).join('');




// 3

function fakeBin(x) {
  return x.replace(/\d/g, d => d < 5 ? 0 : 1);
}



// 4

function fakeBin(str) {
  let newStr = '';

  for(let i = 0; i < str.length; i++){
    const num = str[i];

    if(Number(num) >= 5) {
      newStr += '1';
    } else {
      newStr += '0';
    }
  }
  
  return newStr;
}



// 5

function fakeBin(str) {
  let binaryStr = '';

  [...str].forEach( num => num >= 5 ? binaryStr += 1 : binaryStr += 0);
  
  return binaryStr;
}