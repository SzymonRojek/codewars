
/*  Is the string uppercase?
Add the isUpperCase method to String to see whether the string is ALL CAPS  */

// 1


String.prototype.isUpperCase = function() {
  return this.valueOf().toUpperCase() === this.valueOf();
};

console.log("Hello".isUpperCase()); // false

console.log("HELLO".isUpperCase()); // true


