



/*

Convert a Boolean to a String

Implement a function which convert the given boolean value into its string representation.

*/




// 1

function booleanToString(boolean) {

  return String(boolean);
}

console.log(booleanToString(true)); // "true"
console.log(booleanToString(false)); // "false"




// 2

function booleanToString(b) {
  return b ? 'true' : 'false';
}