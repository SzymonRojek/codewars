


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
