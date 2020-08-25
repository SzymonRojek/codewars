


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



// 3

function boolToWord( bool ){
  return ['No','Yes'][+bool];
}

/*
+bool converts the Boolean to an integer. false = 0, true = 1.

['No','Yes'] is a list with "No" being index 0, and "Yes" being index 1.

Putting an integer in square brackets next to the list gets the item at that index. 
Since, the Boolean is converted to an integer, it is used to access the list by giving the index of the item.
*/



// 4

function boolToWord( bool ){
  let map = new Map ([[true, "Yes"],[false, "No"]]);
  return map.get(bool);
}