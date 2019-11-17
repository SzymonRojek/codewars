/*  Remove anchor from URL

Complete the function/method so that it returns the url with anything after the anchor (#) removed. */



// 1

function removeUrlAnchor(url){
  return url.split('#').shift();
}

console.log(removeUrlAnchor('www.codewars.com#about')); // www.codewars.com



// 2

const removeAnchor = url => url.split('#').shift();

console.log(removeAnchor('www.codewars.com#about')); 



// 3

const removeAnchor = url => url.split('#')[0];

console.log(removeAnchor('www.codewars.com#about')); 
// www.codewars.com



// 4

function removeUrlAnchor(url){

  const index = url.indexOf('#')

   if(url.includes('#')){
   return url.slice(0, index)
 } else{
   return url
 }
 }

console.log(removeUrlAnchor('www.codewars.com#about')); 
// www.codewars.com



// 5


// Write the function which removes everything after the anchor (#):

function removeUrlAnchor(url){
  let a = url.search("#");
  let r = "";
  if(url.includes("#")){
    for(let i = 0; i < a; i++){
    r+=url[i];
    }  
   return r;
  }
  return url;
}

console.log(removeUrlAnchor('www.codewars.com#about')); 
// www.codewars.com



// 6


// Write the function which removes everything after the anchor (#):

const removeUrlAnchor = url => {

  if(url.match("#")){
  return url.slice(0, url.indexOf("#"));
  }
  return url;
  
}
console.log(removeUrlAnchor('www.codewars.com#about')); 
// www.codewars.com


