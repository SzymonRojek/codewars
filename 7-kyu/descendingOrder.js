



// change number to descending order (remember return number):


//  1

const descendingOrder = n => {
  let arr = [...n + ""].sort((a, b) => b - a).join('');
  
  let convertToNumber = Number(arr);
  
  return convertToNumber;
}

console.log(descendingOrder(103245)); // 543210

/* [...n + ""] - it means: take all digits from n and change them to strings */



//  2

function descendingOrder (n) {
  return parseInt(String(n).split('').sort().reverse().join(''));
}

console.log(descendingOrder(103245)); // 543210



//  3

function descendingOrder(n){
  return parseInt(n.toString().split('').sort(function(a, b){
    return b - a;
  }).join(''));
}

console.log(descendingOrder(103245)); // 543210



//  4

function descendingOrder(n){
  let array = []
  for ( let i = 0; i < String(n).length; i++ ){
    array.push(parseInt(String(n)[i]))
  }
  
  array.sort(function(a, b) {
  return b-a
  })
  
  return parseInt(array.join(''));
  
}

console.log(descendingOrder(103245)); // 543210