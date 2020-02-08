

/*
Description:
Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order they are given.

function noOdds( values )
*/



//  1

const noOdds = values => {

  const even = [];

  for (let i = 0; i < values.length; i++) {
          if (values[i] % 2 === 0) {
                  even.push(values[i]);
          }
  }
  return even;
};

console.log(noOdds([0, 1])); // [0]
console.log(noOdds([0, 1, 2, 3])); // [0, 2]



//  2

const noOdds = values => {
  const getEven = values.filter(e => e % 2 === 0);

  return getEven;
};



//  3

const noOdds = values => values.filter(e => !(e % 2));



//  4

function noOdds(values) {
  
  const arr = [];

  for (const num in values) {
          if (num % 2 === 0) arr.push(+num);
  }
  return arr;
}



//  5

function noOdds(values) {

  const even = [];

  values.map(num => (num % 2 === 0 ? even.push(num) : null));
  
  return even;
}



//  6

const noOdds = values => {
  const evenArr = [];
  for (const even of values) {
          even % 2 === 0 ? evenArr.push(even) : null;
  }
  return evenArr;
};



//  7

const noOdds = values => {
  let even = [];
  for (const i in values) {
          if (values[i] % 2 === 0) even = even.concat(values[i]);
  }
  return even;
};

