/*  Description:
Here we have a function that help us spam our hearty laughter. But is not working! I need you to find out why...

Expected results:

spam(1);  // hue
spam(6);  // huehuehuehuehuehue
spam(14); // huehuehuehuehuehuehuehuehuehuehuehuehuehue */



//  1

const spam = number => {

  var repeatedString = "";
  let string = 'hue';

  while (number > 0) {
    repeatedString += string;
    number--;
  }

  return repeatedString;

}
console.log(spam(2)); // huehue