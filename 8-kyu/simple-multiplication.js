


/*
This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
*/


// 1 my solution:

const simpleMultiplication = number =>  number % 2 === 0 ? number * 8 : number * 9;

console.log(simpleMultiplication(2)); // 16
console.log(simpleMultiplication(1)); // 9
console.log(simpleMultiplication(8)); // 64
console.log(simpleMultiplication(4)); // 32
console.log(simpleMultiplication(5)); // 45



// 2:

const simpleMultiplication = n => n * (n % 2 ? 9 : 8);



// 3:

function simpleMultiplication (number) {
    
  if(number % 2 === 0 ) {
   return number * 8
  } else {
   return number * 9;
  }   

}