




/*
Vowel changer

Create a function that changes all the vowels (excluding y) in a string, and changes them all to the same vowel. The first parameter of the function is the string, and the second is the vowel that all the vowels in the string are being changed to.

For Example:

  vowelChange("Hannah Hannah bo-bannah Banana fanna fo-fannah Fee, fy, mo-mannah. Hannah!",'i') // => 'Hinnih Hinnih bi-binnih Binini finni fi-finnih Fii, fy, mi-minnih. Hinnih!'
  vowelChange('adira wants to go to the park', 'o') // =>'odoro wonts to go to tho pork'
*/ 




// 1

const vowelChange = (str, vow) => str.replace(/[aeiou]/gi, vow)


console.log(vowelChange("Hannah Hannah bo-bannah Banana fanna fo-fannah Fee, fy, mo-mannah. Hannah!",'i'));
// 'Hinnih Hinnih bi-binnih Binini finni fi-finnih Fii, fy, mi-minnih. Hinnih!'

console.log(vowelChange('adira wants to go to the park', 'o'));
// 'odoro wonts to go to tho pork'

console.log(vowelChange('amigo', 'o')); // omogo



// 2

const vowelChange = (str, vow) => {
  
  const vowels = { a: vow, e: vow, i: vow, o: vow, u: vow };

  return [...str].map( char => vowels[char] || char).join('');
}



// 3

function vowelChange( str, vow ) {
  newStr = '';

  for(let i = 0; i < str.length; i++){
    
    if( 'aeiou'.includes( str.substring(i, i + 1) )){
      newStr += vow;
    } else {
      newStr += str.substring( i, i + 1 );
    }
  }

  return newStr;
}