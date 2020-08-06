


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



// 3:

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



// 4:

const fix = p => p.split('. ').map(i => i.slice(0, 1).toUpperCase() + i.slice(1)).join('. ');



// 5:

const fix = p =>  !p ? p : p.split`. `.map(x => x[0].toUpperCase() + x.slice(1)).join`. `;



// 6:

unction fix(paragraph){
  let arr = [];
  const ar = paragraph.split('. ');

  for (let i = 0; i < ar.length; i++) {
   
    let a = ar[i][0].toUpperCase();
    
    for (let j = 1; j < ar[i].length; j++) a += ar[i][j];

      arr.push(a);
  }
  
    return arr.join('. ');
  }




// 7:

function fix(paragraph){
  let str = '';
  
  for(let i = 0; i < paragraph.length; i++){
    if( i === 0){
      str += paragraph[i].toUpperCase();
      continue;
    }
    
    if(paragraph[i-1] === ' ' && paragraph[i-2] === '.'){
      str += paragraph[i].toUpperCase();
      continue;
    }
    
    str += paragraph[i];
  }
  
  return str;
}