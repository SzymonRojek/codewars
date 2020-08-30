



/*

Sum without highest and lowest number

Sum all the numbers of the array (in F# and Haskell you get a list) except the highest 
and the lowest element (the value, not the index!).
(The highest/lowest element is respectively only one element at each edge, even if there are more than one with the same value!)

Example:

{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6

If array is empty, null or None, or if only 1 Element exists, return 0.
Note:In C++ instead null an empty vector is used. In C there is no null. ;-)


-- There's no null in Haskell, therefore Maybe [Int] is used. Nothing represents null.
Have fun coding it and please don't forget to vote and rank this kata! :-)

I have created other katas. Have a look if you like coding and challenges.
*/



// 1

function sumArray(array) {

  if(array === null) return 0;

  array = array.sort((a, b) => a - b);

  const popArr = array.pop(), shiftArr = array.shift();

  return array.reduce((a, b) => a + b, 0);
}

console.log(sumArray([ 6, 2, 1, 8, 10 ])); // 16
console.log(sumArray([])); // 16
console.log(sumArray(null)); // 16
console.log(sumArray([ 6])); // 16




// 2

const sumArray = a => a ? a.sort((x, y) => x - y).slice(1, -1).reduce((a, b) => a + b, 0) : 0;
