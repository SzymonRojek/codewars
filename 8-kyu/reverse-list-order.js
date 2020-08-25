



/*

Reverse list order:

In this kata you will create a function that takes in a list and returns a list with the reverse order.

As input you have got a string with digits and return array of digits. 

*/



// 1

function reverseList(list) {
  
  let reversedArr = [];

  for (let i = list.length-1; i >= 0; i--) {
    const num = list[i];

    reversedArr.push(num);
  }

  return reversedArr;
}

console.log(reverseList([1,2,3,4])); // [4,3,2,1]
console.log(reverseList([3,1,5,4])); // [4,5,1,3]
 



// 2

function reverseList(list) {
  return list.reverse();
}



// 3

function reverseList(list) {
  return list.slice().reverse();
}

// slice method creates a shallow copy of the array to not mutate the input.




// 4

const reverseList = ([h, ...t]) => h == undefined ? [] : [...reverseList(t), h];



// 5

function reverseList(list) {
  return list.reduce((reverseList, element) => [element, ...reverseList], []);
}