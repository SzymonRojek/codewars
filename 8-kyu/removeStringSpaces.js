// Remove string spaces


//  1.

function noSpace(x){
  return x.split(' ').join('');
  }



// 2

let x = '8aaaaa dddd r     ';

let newX = x.split(' ');

console.log(newX); 
// ["8aaaaa", "dddd", "r", "", "", "", "", ""]

let newX1 = newX.join('');
console.log(newX1); //8aaaaaddddr



// 3 arrow function

const space = x => {
  return x.split(' ').join('');
  }
  
  
  console.log(space('dd d  edd')); // dddedd
  


// 4 

const noSpace = x => {
  let arr =  x.split(' ');
  return arr.reduce((a,b)=>a+b);
 }

 console.log(noSpace('jja    aaaa jjjj')); // jjaaaaajjjj



 // 5
 function noSpace(x){
  var data = x.split(" ");
  var result = "";

  for (var i = 0; i < data.length; i++) {
    if (data[i] != " ") {
      result += data[i];
    }
  }

  return result;
}

 console.log(noSpace('jja    aaaa jjjj')); // jjaaaaajjjj



 // 6

 const noSpace = x => {
  let data = x.split(" ");
  let result = "";

  for (var i = 0; i < data.length; i++) {
    if (data[i] != " ") {
      result += data[i];
    }
  }

  return result;
}

 console.log(noSpace('jja    aaaa jjjj')); // jjaaaaajjjj