
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


