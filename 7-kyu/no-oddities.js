

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