

/*  Number passed is always Positive .

Return the result as String .

The difference between ‘9’ and ‘0’ is not considered as 1 .

All single digit numbers are considered as Jumping numbers. */



//  1

const jumpingNumber = n => {
  n = n
          .toString()
          .split('')
          .map(Number);

  let check = true;

  n.forEach((el, i, arr) => {
          // check the last element of an array
          if (arr.length === i + 1) {
                  return;
          }
          
          /*      also you can use this statement: 
                  if (!(arr[i + 1] || arr[i + 1] === 0)) {                return; 
                  }
          */

          const result = arr[i] - arr[i + 1];

          if (!(result === 1 || result === -1)) {
                  check = false;
          }
  });

  return check ? 'Jumping!!' : 'Not!!';
};

console.log(jumpingNumber(1)); //  "Jumping!!"
console.log(jumpingNumber(7)); //  "Jumping!!"
console.log(jumpingNumber(9)); //  "Jumping!!"
console.log(jumpingNumber(23)); //  "Jumping!!"
console.log(jumpingNumber(32)); //  "Jumping!!"
console.log(jumpingNumber(79)); // "Not!!"
console.log(jumpingNumber(98)); //  "Jumping!!"
console.log(jumpingNumber(8987)); //  "Jumping!!"
console.log(jumpingNumber(4343456)); //  "Jumping!!"
console.log(jumpingNumber(98789876)); //  "Jumping!!"



//  2

const jumpingNumber = n => n.toString().split``.every((e, i, a) => i < 1 || Math.abs(e - a[i - 1]) === 1) ? 'Jumping!!' : 'Not!!';



//  3

function jumpingNumber(n){
  return [...n+''].every((x,i,a)=>!i||x==+a[i-1]+1||x==a[i-1]-1)?'Jumping!!':'Not!!'
}



//  4

function jumpingNumber(n){
  let arr = n.toString().split('')
  for(i=0; i < arr.length-1; i++){
    if(Math.abs(arr[i] - arr[i+1]) !== 1 ){
      return 'Not!!'
    }
  }
  return 'Jumping!!'
}



//  5

function jumpingNumber(n){
  const isJumping = [...`${n}`]
    .map((num, i, self) => i === 0 ? 1 : num - self[i-1])
    .every(num => num === 1 || num === -1)
    
  return isJumping ? 'Jumping!!' : 'Not!!'
}



//  6

function jumpingNumber(n){
  var str = Number(n).toString();
  
  if(str.length === 1) return "Jumping!!";
  if(isJumpingNumber(str, str.length - 1)) return "Jumping!!";
  return "Not!!"; 
}

function isJumpingNumber(str, index){
  if(index === 0) return str[0];
  return Math.abs(str[index] - str[index - 1]) === 1 && isJumpingNumber(str, index - 1);
  }



  //  7

  const jumpingNumber = n => {
    const arr = [...`${n}`];

    for (i = 0; i < arr.length - 1; i++) {
            const result = Math.abs(arr[i] - arr[i + 1]);

            if (!(result === 1)) {
                    return 'Not';
            }
    }
    return 'Jumping';
};