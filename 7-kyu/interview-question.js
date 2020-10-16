

/*

You receive the name of a city as a string, and you need to return a string that shows how many times each letter shows up in the string by using an asterisk (*).

For example:

"Chicago"  -->  "c:**,h:*,i:*,a:*,g:*,o:*"
As you can see, the letter c is shown only once, but with 2 asterisks.

The return string should include only the letters (not the dashes, spaces, apostrophes, etc). 
There should be no spaces in the output, and the different letters are separated by a comma (,) as seen in the example above.

Note that the return string must list the letters in order of their first appearence in the original string.

More examples:

"Bangkok"    -->  "b:*,a:*,n:*,g:*,k:**,o:*"
"Las Vegas"  -->  "l:*,a:**,s:**,v:*,e:*,g:*"

*/


// 1

function getStrings(city){
  let obj = {};

  let newStr = '';

  city = city.toLowerCase().replace(/\s/g,'');

  for (let i = 0; i < city.length; i++) {
    const letter = city[i];
    
    obj[letter] = (obj[letter] || '') + '*'
   
  }

  for (const key in obj) {
    newStr += `${key}:${obj[key]},`
  }

  return newStr.replace(/,\s*$/, "");
}

console.log(getStrings("Chicago")); // "c:**,h:*,i:*,a:*,g:*,o:*"
console.log(getStrings("Bangkok")); // "b:*,a:*,n:*,g:*,k:**,o:*"
console.log(getStrings("Las Vegas")); // "l:*,a:**,s:**,v:*,e:*,g:*"
