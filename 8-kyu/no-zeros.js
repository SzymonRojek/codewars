

/*
Description:
Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105
*/



//  1

function noBoringZeros(n) {

  n = n.toString().split('');

  for (i = n.length - 1; i >= 0; i--) {
          if (n[i] == 0) {
                  n.pop();
          } else {
                  break;
          }
  }
  return +n.join('');
}

console.log(noBoringZeros(1450)); // 145
console.log(noBoringZeros(960000)); // 96
console.log(noBoringZeros(1050)); // 105
console.log(noBoringZeros(-1050)); // -105
console.log(noBoringZeros(-105)); // -105



//  2

const noBoringZeros = n => +`${n}`.replace(/0*$/, '');



//  3

const noBoringZeros = n => +('' + n).replace(/0 + $/, '');



//  4

const noBoringZeros = n => +n.toString().replace(/0+$/, '');



//  5

const noBoringZeros = n => Number(n.toString().replace(/0+$/, ''));



//  6

function noBoringZeros(n) {
  const nString = n.toString();
  if (nString.length > 1) {
          const arrOfNums = nString.split('');

          while (arrOfNums[arrOfNums.length - 1] === '0') {
                  arrOfNums.pop();
          }

          const nString2 = arrOfNums.join('');
          return parseInt(nString2, 10);
  }
  return n;
}



//  7

function noBoringZeros(n) {
  const digitArray = Array.from(String(n), Number);

  while (digitArray[digitArray.length - 1] === 0) {
          digitArray.pop();
  }

  return +digitArray.map(i => (isNaN(i) ? '-' : i)).join('');
}

console.log(noBoringZeros(1450)); // 145
console.log(noBoringZeros(960000)); // 96
console.log(noBoringZeros(1050)); // 105
console.log(noBoringZeros(-1050)); // -105
console.log(noBoringZeros(-105)); // -105

// https://stackoverflow.com/questions/7540397/convert-nan-to-0-in-javascript
