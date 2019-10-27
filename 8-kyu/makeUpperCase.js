



// Write a function makeUpperCase:



1.
function makeUpperCase(str) {
  return  str.toUpperCase();
}

makeUpperCase('i am learning js');


2.
const makeUpperCase = (s) => s.toUpperCase();

makeUpperCase('hi');


3.
function makeUpperCase(str) {

  let answer = '';

  for(let i = 0; i < str.length; i++){
    
    console.log(str[i]);
    answer += str[i].toUpperCase();
  }
  return answer;
}

console.log(makeUpperCase('this is another example'));


4.
let a = "how are you";

function makeUpperCase(str) {

  return  str.toUpperCase(); 

};

makeUpperCase(a);


5.
const makeUpperCase = str => {

  return str.split('').map((s) => s.toUpperCase()).join('');

}

(makeUpperCase('something new');