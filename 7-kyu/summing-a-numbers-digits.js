

/*  Description:
Write a function named sumDigits which takes a number as input
and returns the sum of the absolute value of each of the number's decimal digits. 

For example:

  sumDigits(10);  // Returns 1
  sumDigits(99);  // Returns 18
  sumDigits(-32); // Returns 5    */



  //  1

  const sumDigits = number => {
    const arr = number
            .toString()
            .split('-')
            .join('');
    const arr1 = arr.toString().split('');
    return arr1.map(Number).reduce((a, b) => a + b, 0);
};

console.log(sumDigits(10)); // 1
console.log(sumDigits(99)); // 18
console.log(sumDigits(-32)); // 5



//  2

const sumDigits = number =>
        Math.abs(number)
                .toString()
                .split('')
                .reduce((a, b) => +a + +b, 0);

console.log(sumDigits(10)); // 1
console.log(sumDigits(99)); // 18
console.log(sumDigits(-32)); // 5



//  3

function sumDigits(number) {
  const i = 0;
  let sum = 0;
  number = Math.abs(number);
  while (number != 0) {
          sum += number % 10;
          number = Math.floor(number / 10);
  }
  return sum;
}

console.log(sumDigits(10)); // 1
console.log(sumDigits(99)); // 18
console.log(sumDigits(-32)); // 5



//  4

function sumDigits(number) {
  const str_num = `${number}`;

  let result = 0;
  str_num.split('').forEach(function(el) {
          const digit = parseInt(el);
          if (isNaN(digit)) {
                  return;
          }

          result += digit;
  });

  return result;
}

console.log(sumDigits(10)); // 1
console.log(sumDigits(99)); // 18
console.log(sumDigits(-32)); // 5



//  5

const sumDigits = number =>
        number
                .toString()
                .split('')
                .reduce((sum, n) => (n === '-' ? sum : sum + parseInt(n)), 0);

console.log(sumDigits(10)); // 1
console.log(sumDigits(99)); // 18
console.log(sumDigits(-32)); // 5\



//  6

const sumDigits = n => [...`${Math.abs(n)}`].reduce((s, v) => s + +v, 0);

// const sumDigits = n => [...Math.abs(n)+''].reduce((s,v)=>s+(+v),0)

console.log(sumDigits(10)); // 1
console.log(sumDigits(99)); // 18
console.log(sumDigits(-32)); // 5



//  7

function sumDigits(q) {
  let a = 0;
  [].map.call(`${Math.abs(q)}`, e => (a += +e));
  return a;
}

console.log(sumDigits(10)); // 1
console.log(sumDigits(99)); // 18
console.log(sumDigits(-32)); // 5



//  8

sumDigits = n => [...`${n}`].reduce((a, b) => a + (b | 0), 0);

// sumDigits=n=>[...(n+'')].reduce((a,b)=>a+(b|0),0)

console.log(sumDigits(10)); // 1
console.log(sumDigits(99)); // 18
console.log(sumDigits(-32)); // 5



