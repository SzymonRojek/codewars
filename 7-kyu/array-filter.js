



/*
 Java Script array filter

Description:
JavaScript Arrays support a filter function (starting in JavaScript 1.6). 

Use the filter functionality to complete the function given.

The solution would work like the following:

getEvenNumbers([2,4,5,6]) // should == [2,4,6]

*/



// 1

function getEvenNumbers(numbersArray) {

  return numbersArray.filter( num => num % 2 === 0);
}



// 2

const getEvenNumbers = arr => arr.filter(x => !(x & 1));



// 3

function isEven(num) {

  return num % 2 == 0;
}

function getEvenNumbers(numbersArray){
  // filter out the odd numbers

  const filtered = numbersArray.filter(isEven);
  
  return filtered;
}