



/*
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
*/



// 1

const disemvowel = str => {

  return [...str].map(letter => {

      if(/[aeiouyAEIOUY]/.test(letter)){
     letter = '';
    } else {
      return letter;
    }
    }).join('');

}

console.log(disemvowel("This website is for losers LOL!"));  // "Ths wbst s fr lsrs LL!"




// 2

const disemvowel = str => {

  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let withoutVowels = '';

  for (let i = 0; i < str.length; i++) {
    const letter = str[i];

    if(vowels.indexOf(letter) === -1) withoutVowels += letter; 
  }

  return withoutVowels;
}



// 3

const disemvowel = str => {

  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

  let withoutVowels = '';

  [...str].forEach(letter => (vowels.indexOf(letter) === -1) ? withoutVowels += letter : letter);

  return withoutVowels;
}



// 4

const vowels = 'aeiouAEIOU';
const disemvowel = str => [...str].filter(letter => !vowels.indexOf(letter.toLowerCase())).join('');



// 5

const disemvowel = str => [...str].map(letter => /[aeiouyAEIOUY]/.test(letter) ? letter = '' : letter).join('');

