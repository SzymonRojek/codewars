


/*
Description:
Step 1: Create a function called encode() to replace all the lowercase vowels 
in a given string with numbers according to the following pattern:

a -> 1
e -> 2
i -> 3
o -> 4
u -> 5

For example, encode("hello") would return "h2ll4". 
There is no need to worry about uppercase vowels in this kata.

Step 2: Now create a function called decode() to turn the numbers back into vowels 
according to the same pattern shown above.

For example, decode("h3 th2r2") would return "hi there".

For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.
*/


// 1:

function encode(string) {
  const dictionary = { a: 1, e: 2, i: 3, o: 4, u: 5 };
  let newStr = '';
  
  for (let i = 0; i < string.length; i++) {
    let char = string[i]
    let encodedChar = dictionary[char];
    
    if (encodedChar) {
      newStr += encodedChar;
    } else {
      newStr += char;
    }
  }

  return newStr;
}


console.log(encode('dtzfpteiay')); // dtzfpt231y
console.log(encode('How are you today?')); // 'H4w 1r2 y45 t4d1y?'
console.log(encode('This is an encoding test.')); // 'Th3s 3s 1n 2nc4d3ng.' t2st.'



function decode(string) {

  const dictionary = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' };

  let newStr = '';

  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    let decodedChar = dictionary[char];

    if(decodedChar) {
      newStr += decodedChar;
    } else {
      newStr += char;
    }
    
  }

  return newStr;
}
 
console.log(decode('dtzfpt231y')); // 'dtzfpty' 
console.log(decode('H4w 1r2 y45 t4d1y?')); // How are you today?
console.log(decode('Th3s 3s 1n 2nc4d3ng.')); // This is an encoding.
 


// 2:

// turn vowels into numbers
function encode(string){
  return string.replace(/[aeiou]/g, function (x) { return '_aeiou'.indexOf(x) });
}

//turn numbers back into vowels
function decode(string){
  return string.replace(/[1-5]/g, function (x) { return '_aeiou'.charAt(x) });
}



// 3:

const encode = s => s.replace(/[aeiou]/g, v => ' aeiou'.indexOf(v));
const decode = s => s.replace(/\d/g, v => ' aeiou'[v]);