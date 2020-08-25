


/*
Convert boolean values to strings 'Yes' or 'No'.

Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
*/


// 1

function boolToWord(bool) {
  return bool === true ? 'Yes' : 'No';
}

console.log(boolToWord(true)); // 'Yes'
console.log(boolToWord(false)); // 'No'



// 2

function boolToWord(bool){
  if (bool) {
    return 'Yes';
  } else {
    return 'No';
  }
}