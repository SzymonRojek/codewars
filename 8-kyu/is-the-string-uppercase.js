
/*  Is the string uppercase?
Add the isUpperCase method to String to see whether the string is ALL CAPS  */

// 1


String.prototype.isUpperCase = function() {
  return this.valueOf().toUpperCase() === this.valueOf();
};

console.log("Hello".isUpperCase()); // false

console.log("HELLO".isUpperCase()); // true



// 2

const isUpperCase = str => {
  return str == str.toUpperCase() || str != str.toLowerCase();
}

console.log(isUpperCase('BLEEE')); // true

console.log(isUpperCase('bleee')); // false



// 3

String.prototype.isUpperCase = function(){
  if(this.toString() == this.toUpperCase()){
    return true;
  } else{
    return false;
  }
}

console.log("Hello".isUpperCase()); // false
console.log("HELLO".isUpperCase()); // true



// 4

String.prototype.isUpperCase = function() {
  return this.toUpperCase() == this;
}

console.log("Hello".isUpperCase()); // false
console.log("HELLO".isUpperCase()); // true



// 5

String.prototype.isUpperCase = function IsUpperCase() {

  let str = this.toString();
 
   if (typeof str === "string") {
 
     let lowerletters = "lowletters";  
     for (let i = 0; i < str.length; i++) {  
         if (lowerletters.includes(str.charAt(i))) {
             return false;
         }
     }    
   return true ;
   }
 }

console.log("Hello".isUpperCase()); // false
console.log("HELLO".isUpperCase()); // true



// 1: change every first letter to uppercase for each word 

const changeMe = x => {
  
  let str = x.split(' ')
  console.log(str);
  ["World", "is", "amazing,", "isn't", "it?"]

  for (var i = 0;  i < str.length; i++) {
    /* alternatively: 
    str[i] = str[i][0].toUpperCase() + str[i].substr(1); */

    str[i] = str[i].charAt(0).toUpperCase() + str[i].substr(1);  
}
  return str.join(' ');
};
 
console.log(changeMe("world is amazing, isn't it?")); 
// World Is Amazing, Isn't It?



/* 2: I have a sentence with uppercase and lowercase letters - reduce them to small and only enlarge the first letters of each word */

const changeLetters = str => {

  let sentenceStr = str.toLowerCase().split(' ');
  console.log(sentenceStr); // ["i'm", "a", "little", "tea", "pot"]

  for (var i = 0; i < sentenceStr.length; i++) {
      // I do not need to check if i is larger than splitStr length, as your for does that for you
      // Assign it back to the array
      sentenceStr[i] = sentenceStr[i].charAt(0).toUpperCase() + sentenceStr[i].substring(1);     
  }
  // Directly return the joined string
  return sentenceStr.join(' '); 
}

console.log(changeLetters("I'M a liTTle tEa pot"));
// I'm A Little Tea Pot
