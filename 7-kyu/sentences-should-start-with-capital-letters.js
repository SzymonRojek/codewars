


/*
Description:
In English, all words at the begining of a sentence should begin with a capital letter.

You will be given a paragraph that does not use capital letters. 
Your job is to capitalise the first letter of the first word of each sentence.

For example,

input:

"hello. my name is inigo montoya. you killed my father. prepare to die."

output:

"Hello. My name is inigo montoya. You killed my father. Prepare to die."

You may assume:

there will be no punctuation besides full stops and spaces

all but the last full stop will be followed by a space and at least one word
*/ 



// 1:


function fix(p){
  p = p.split('. ');

   let indices = [];

   p.forEach(el => indices.push( el.charAt(0).toUpperCase() + el.slice(1)));

 return String(indices).replace(/,/g, ". ");
}  

console.log(fix("hello. my name is inigo montoya. you killed my father. prepare to die."));
// 'Hello. My name is inigo montoya. You killed my father. Prepare to die.'



// 2:

const fix = p => p.split('. ').map(el => el.charAt(0).toUpperCase() + el.slice(1)).join('. ');



// 3

function fix(paragraph){
  let returnParagraph = '';
  
  for (let i = 0; i < paragraph.length; i++) {
    if (i === 0 || paragraph[i - 2] === '.') {
      returnParagraph += paragraph[i].toUpperCase();
    } else {
      returnParagraph += paragraph[i];
    }
  }
  
  return returnParagraph;
}