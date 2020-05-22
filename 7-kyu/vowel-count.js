


/*
Description:
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, and u as vowels for this Kata.

The input string will only consist of lower case letters and/or spaces.
*/



// 1. using reduce():
 
function countVowels(str) {
  const vowel = {
      a: true,
      ą: true,
      e: true,
      ę: true,
      i: true,
      o: true,
      u: true,
      y: true
  }

return [...str].reduce(( countVowels, currentVowel ) => {
      if(vowel[currentVowel]) {
          countVowels++;
      }

  return countVowels;
}, 0);
}

countVowels('Uczę się JavaScriptu'); // 8



// 2. using two for loops:
 
function countVowels(str) {
  const vowels = ['a', 'ą', 'e', 'ę', 'i', 'o', 'u', 'y'];
  let counter = 0;
 
  for (let i = 0; i < str.length; i++) {
    const strVowel = str[i].toLowerCase();
 
    for (let j = 0; j < vowels.length; j++) {
    const arrVowel = vowels[j];
   
      if(strVowel === arrVowel) {
        counter++;
      }
    }
  }
 
  return counter;
}




// 3. using two for of:
 
function countVowels(str) {
  const vowels = ['a', 'ą', 'e', 'ę', 'i', 'o', 'u', 'y'];
  let counter = 0;
 
  for (let letter of str) {
    letter = letter.toLowerCase();
 
    for(const vowel of vowels) {
     if(letter === vowel) {
       counter++;
     }
   }
  }
 
  return counter;
}
 
countVowels('Uczę się JavaScriptu'); // 8




// using object and 1 for loop:
 
function countVowels(str) {
  let counterVowels = 0;
 
  const vowels = {
    a: true,
    ą: true,
    e: true,
    ę: true,
    i: true,
    o: true,
    u: true,
    y: true
  }
 
  for (let i = 0; i < str.length; i++) {
    const vowelStr = str[i].toLowerCase();
   
      if(vowels[vowelStr]) {
        counterVowels++;
      }
  }
 
  return counterVowels;
}
 
countVowels('Uczę się JavaScriptu'); // 8
 


// using forEach method:
 
function countVowels(str) {
  let counterVowels = 0;
 
  const vowels = {
      a: true,
      ą: true,
      e: true,
      ę: true,
      i: true,
      o: true,
      u: true,
      y: true
  };
 
  [...str].forEach(vowel => {
    vowel = vowel.toLowerCase();
 
  if(vowels[vowel]) counterVowels++;
})
 
  return counterVowels;
}
 
countVowels('aaaBBBAAAa'); // 7
 
 

 
// filter and object:
 
function countVowels(str) {
  str = str.toLowerCase();
  const vowels = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true
  }
 
  return [...str].filter(letter => vowels[letter]).length
}
console.log(countVowels('aaaBceA')); // 5

