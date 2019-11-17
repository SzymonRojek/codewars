/*  Remove anchor from URL

Complete the function/method so that it returns the url with anything after the anchor (#) removed. */

// 1

function removeUrlAnchor(url){
  return url.split('#').shift();
}


console.log(removeUrlAnchor('www.codewars.com#about')); // www.codewars.com
