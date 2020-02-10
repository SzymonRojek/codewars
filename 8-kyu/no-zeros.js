

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