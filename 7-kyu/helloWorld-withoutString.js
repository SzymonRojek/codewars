


/*
You need to create a function, helloWorld, that will return the 
String Hello, World! without actually using raw strings. 
This includes quotes, double quotes and template strings. 
You can, however, use the String constructor and any related functions. */


// 1

const helloWorld = () => {
  return String.fromCharCode(72,101,108,108,111,0x002C,32,87,111,114,108,100,33)
};
console.log(helloWorld()); // Hello, World!

/*  Description:

small letters example:
A : 65    a : (65 + 32) = 97
B : 66    b : (66 + 32) = 98
C : 67    c : (67 + 32) = 99

comma: UTF-16 (decimal)	44
exclamation mark: UTF-16 (decimal)	33

check full list:
http://www.fileformat.info/info/charset/UTF-16/list.htm

*/



// 2

const helloWorld = () => {
  let d = String.fromCharCode(100);
  let l = String.fromCharCode(108);
  let e = String.fromCharCode(101);
  let r = String.fromCharCode(114);
  let H = String.fromCharCode(72);
  let W = String.fromCharCode(87);
  let o = String.fromCharCode(111);
  let comma = String.fromCharCode(44);
  let blank = String.fromCharCode(32);
  let exclamation = String.fromCharCode(33);
  
  return H + e + l + l + o + comma + blank + W + o + r + l + d + exclamation;
};

console.log(helloWorld()); // Hello, World!



// 3

let str ='Hello, World!'; 
// created global variable and use in the function

const helloWorld=()=> str;

console.log(helloWorld()); // Hello, World!



// 4

const helloWorld = () => {
  let result = String(/Hello, World!/)
    
  return result.slice(1,-1);
};
  
  console.log(helloWorld()); // Hello, World!