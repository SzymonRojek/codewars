

/*
Description:

Write a function that returns true if the number is a "Very Even" number.

If the number is odd, it is not a "Very Even" number.

If the number is even, return whether the sum of the digits is a "Very Even" number.

Examples:

input(88) => returns false -> 8 + 8 = 16 -> 1 + 6 = 7 => 7 is odd 

input(222) => returns true

input(5) => returns false

Note: The numbers will always be positive!
*/



//  1

const isVeryEvenNumber = n => {
  const changeToArray = [...`${n}`].map(Number);

  const add1 = [eval(changeToArray.join('+'))];
  console.log(add1); // [19]

  const separate1 = [...`${add1}`].map(Number);
  console.log(separate1); // [1, 9]

  const add2 = [eval(separate1.join('+'))];
  console.log(add2); // [10]

  const separate2 = [...`${add2}`].map(Number);
  console.log(separate2); // [1, 0]

  const add3 = eval(separate2.join('+'));
  console.log(add3); // 1

  if (add3 % 2 === 0) {
          return true;
  }
  return false;
};

console.log(isVeryEvenNumber(568)); // false



// Better solution than 1 

const isVeryEvenNumber = n => {


  const separate1 = [...String(n)];

  const add1 = eval(separate1.join('+')); // [19]


  const separate2 = [...String(add1)]; // [1, 9]

  const add2 = eval(separate2.join('+')); // [10]


  const separate3 = [...String(add2)]; // [1, 0]

  const add3 = eval(separate3.join('+')); // 1


  if (add3 % 2 === 0) {
          return true;
  }
  return false;

};

console.log(isVeryEvenNumber(568)); // false



//  2

function isVeryEvenNumber(n) {
  while (n.toString().length > 1) {
          const array = n.toString().split('');
          n = array.reduce((a, b) => Number(a) + Number(b), 0);
  }
  if (!(n % 2 === 0)) {
          return false;
  }

  return true;
}

console.log(isVeryEvenNumber(568)); // false



//  3

const isVeryEvenNumber = n => !n-- || (n % 9) % 2 === 1;

console.log(isVeryEvenNumber(568)); // false



//  4

function isVeryEvenNumber(n) {
  if (n < 10 && n % 2 === 0) return true;
  if (n > 9) {
          return isVeryEvenNumber(
                  String(n)
                          .split('')
                          .reduce((a, b) => +a + +b)
          );
  }
  return false;
}

console.log(isVeryEvenNumber(568)); // false



//  5

function isVeryEvenNumber(n) {
  let array = [...String(n)];
  array = [...String(n)];
  while (array.length > 1) {
          array = [...String(array.reduce((sum, digit) => sum + parseInt(digit, 0), 0))];
  }
  return array[0] % 2 === 0;
}

console.log(isVeryEvenNumber(568)); // false



//  6

function isVeryEvenNumber(n) {
  let rem = 0;
  let sum = 0;
  while (n > 0) {
          rem = n % 10;
          sum += rem;
          n = parseInt(n / 10);
  }
  if (sum > 9) return isVeryEvenNumber(sum);

  if (sum % 2 == 0) return true;
  return false;
}

console.log(isVeryEvenNumber(568)); // false



//  7

function isVeryEvenNumber(n) {
  return n > 9 ? isVeryEvenNumber(`${n}`.split('').reduce((a, b) => +a + +b)) : n % 2 === 0;
}

console.log(isVeryEvenNumber(568)); // false



//  8

function isVeryEvenNumber(n) {
  if (n.toString().length === 1) {
          return !(n % 2);
  }
  return isVeryEvenNumber(parseNumber(n));
}

function parseNumber(number) {
  return number
          .toString()
          .split('')
          .reduce((a, b) => Number(a) + Number(b), 0);
}

console.log(isVeryEvenNumber(568)); // false


