


/*
Description:

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter needs to be converted to its ASCII code.
The second letter needs to be switched with the last letter
Keepin' it simple: There are no special characters in input.

Examples:
encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"
*/


// 1:

function encryptThis(message) {
  const words = message.split(' ');

  const encryptedWords = [];

  words.forEach( word => {
console.log(word);

    let newWord = word.charCodeAt(0);
console.log(newWord);

    [...word].forEach((letter, index) => {
      const wordLength = word.length;

      if( index == 1 && wordLength >= 3 ) {
        newWord += word[wordLength -1];
      } else if ( index == wordLength - 1 && wordLength >= 3 ) {
        newWord += word[1];
      } else if ( index > 0) {
        newWord += letter;
      }
    })
    encryptedWords.push(newWord);
  })
  return encryptedWords.join(' ');
}

console.log(encryptThis('hello')); // 104olle
console.log(encryptThis('good')); // 103doo
console.log(encryptThis('hello world')); // 104olle 119drlo