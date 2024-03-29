/*  Remove anchor from URL

Complete the function/method so that it returns the url with anything after the anchor (#) removed. */



//  1

function removeUrlAnchor(url){
  return url.split('#').shift();
}

console.log(removeUrlAnchor('www.codewars.com#about')); // www.codewars.com



//  2

const removeAnchor = url => url.split('#').shift();

console.log(removeAnchor('www.codewars.com#about')); 



// 3

const removeAnchor = url => url.split('#')[0];

console.log(removeAnchor('www.codewars.com#about')); 
// www.codewars.com



//  4

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



//  5


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



//  6


// Write the function which removes everything after the anchor (#):

const removeUrlAnchor = url => {

  if(url.match("#")){
  return url.slice(0, url.indexOf("#"));
  }
  return url;
  
}
console.log(removeUrlAnchor('www.codewars.com#about')); 
// www.codewars.com



//  7

const removeUrlAnchor = url => {

  let str_array = url.split("#");
  return str_array[0];
  
}
console.log(removeUrlAnchor('www.codewars.com#about')); 
// www.codewars.com



// 8


const removeUrlAnchor = url => {

  const filteredUrl = url.substring(0, url.indexOf('#'));
  return filteredUrl === '' ? url : filteredUrl;

  }

console.log(removeUrlAnchor('www.codewars.com#about')); 
// www.codewars.com


// 9

const removeUrlAnchor = url => {
  const newUrl = [];
  url = url.split('');
  
  for (let i = 0; i < url.length; i++) {
    if (url[i] === '#')
      break;
      
    newUrl.push(url[i]);
  }
  
  return newUrl.join('');

}



// 10




const removeUrlAnchor = url => {
  let i = 0;
  while(i < url.length){
    i++;
    if(url[i]==='#') return url.slice(0,i);
  }
  return url;
}

console.log(removeUrlAnchor('www.codewars.com#about')); 
// www.codewars.com

