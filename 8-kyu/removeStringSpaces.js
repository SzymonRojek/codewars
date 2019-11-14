// Remove string spaces


//  1.

function noSpace(x){
  return x.split(' ').join('');
  }



// 2

let x = '8aaaaa dddd r     ';

let newX = x.split(' ');

console.log(newX); 
// ["8aaaaa", "dddd", "r", "", "", "", "", ""]

let newX1 = newX.join('');
console.log(newX1); //8aaaaaddddr