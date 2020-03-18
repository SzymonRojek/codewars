

/*
Description:
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.
*/


//  1

function capitalize(s) {
  const evenUpper = s
          .split('')
          .map((c, i) => (i % 2 === 0 ? c.toUpperCase() : c.toLowerCase()))
          .join('');

  const oddUpper = s
          .split('')
          .map((c, i) => (i & 1 ? c.toUpperCase() : c.toLowerCase()))
          .join('');
  return [evenUpper, oddUpper];
}

console.log(capitalize('abcdef')); // ['AbCdEf', 'aBcDeF']
console.log(capitalize('codewars')); // ['CoDeWaRs', 'cOdEwArS']
console.log(capitalize('abracadabra')); // ['AbRaCaDaBrA', 'aBrAcAdAbRa']
console.log(capitalize('codewarriors')); // ['CoDeWaRrIoRs', 'cOdEwArRiOrS']