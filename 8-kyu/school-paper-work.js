

/*
Description:
Your classmates asked you to copy some paperwork for them. 
You know that there are 'n' classmates and the paperwork has 'm' pages.

Your task is to calculate how many blank pages do you need.

Example:
paperwork(5, 5) == 25
Note! if n or m < 0 return 0! Waiting for translations and Feedback! Thanks!
*/


//  1

const paperwork = (n, m) => (n < 0 || m < 0 ? 0 : n * m);

console.log(paperwork(2, 4));



//  2

const paperwork = (n, m) => (n > 0 && m > 0 ? n * m : 0);



//  3

const paperwork = (n, m) => Math.max(0, n) * Math.max(0, m);



//  4

const paperwork = (n, m) => {
  if (n <= 0 || m <= 0) {
          var pages = 0;
  } else pages = n * m;
  return pages;
};



//  5

function paperwork(classmates, pages) {
  if (Array.from(arguments).some(arg => arg < 0) ) return 0;
  return classmates * pages;
}