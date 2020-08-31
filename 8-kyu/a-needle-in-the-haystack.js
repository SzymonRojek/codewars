



/*

A Needle in the Haystack

Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])

should return "found the needle at position 5"

*/




// 1

function findNeedle(haystack) {
  return `found the needle at position ${haystack.indexOf('needle')}`;
}


var haystack_1 = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false];
var haystack_2 = ['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago'];
var haystack_3 = [1,2,3,4,5,6,7,8,8,7,5,4,3,4,5,6,67,5,5,3,3,4,2,34,234,23,4,234,324,324,'needle',1,2,3,4,5,5,6,5,4,32,3,45,54];

console.log(findNeedle(haystack_1)); // 'found the needle at position 3'
console.log(findNeedle(haystack_2)); // 'found the needle at position 5'
console.log(findNeedle(haystack_3)); // 'found the needle at position 30'




// 2

function findNeedle(array) {

  for (let i=0; i < array.length; i++){
    if (array[i] === 'needle') return 'found the needle at position ' + i;
  }
  
}




// 3

function findNeedle(haystack) {
  let item = null;

    const array1 = haystack;

    array1.forEach((currentValue, index) => {    
      if(currentValue ==='needle') {
        item = 'found the needle at position ' + String(index);
      }
    });

    return item;
};




// 4

function findNeedle(q, q2='needle') {

  let a=q.findIndex(e => e === q2);

 return(a > -1) ? `found the ${q2} at position ${a}` : `` ;
}



// 5

function findNeedle(haystack) {
  let res = 0;

  for(let i = 0; i < haystack.length; i++) {
    if(haystack[i] == "needle") res += i;
  }

  return `found the needle at position ${res}`;
}



// 6

function findNeedle(h) {
  let g;
  
  h.map((i, p) => {
    if(i === "needle") g = `found the needle at position ${p}` 
    });

  return g;
}



// 7

function findNeedle(haystack) {
  
  return haystack.indexOf('needle') ? 'found the needle at position ' + haystack.indexOf('needle') : false;
}



// 8

function findNeedle(haystack) {
  
  function find(array, value) {

  for (let i = 0; i < array.length; i++) {
    if (array[i] == value) return i;
  }

  }
  
 return "found the needle at position " + find(haystack, 'needle');
}