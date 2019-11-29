



// change number to descending order (remember return number):


//  1

const descendingOrder = n => {
  let arr = [...n + ""].sort((a, b) => b - a).join('');
  
  let convertToNumber = Number(arr);
  
  return convertToNumber;
}

console.log(descendingOrder(103245)); // 543210

/* [...n + ""] - it means: take all digits from n and change them to strings */



// 2

function descendingOrder(n){
  return parseInt(String(n).split('').sort().reverse().join(''));
}



