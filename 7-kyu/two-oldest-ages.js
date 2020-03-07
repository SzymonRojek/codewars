

/*
Description:
The two oldest ages function/method needs to be completed. 
It should take an array of numbers as its argument and return the two highest numbers within the array. 
The returned value should be an array in the format [second oldest age, oldest age].

The order of the numbers passed in could be any order. 
The array will always include at least 2 items.

For example:

twoOldestAges( [1, 2, 10, 8] ) // should return [8, 10]

*/


//  1

function twoOldestAges(ages) {
  ages.sort(function(a, b) {
          return b - a;
  });
  return Array(ages[1], ages[0]);
}

console.log(twoOldestAges([1, 5, 87, 45, 8, 8])); // 45, 87



//  2

const twoOldestAges = ages => ages.sort((a, b) => a - b).slice(-2);



//  3

const twoOldestAges = ages => [...ages].sort((a, b) => a - b).slice(-2);



//  4

function twoOldestAges(ages) {
  let max_1 = 0;
  let max_2 = 0;

  for (const age of ages) {
          if (age > max_2) {
                  max_2 = age;
          } else if (age > max_1) {
                  max_1 = age;
          }
  }

  return [max_1, max_2];
}



//  5

function twoOldestAges(ages) {
  const max = Math.max(...ages);
  return [Math.max(...ages.filter(age => age < max)), max];
}