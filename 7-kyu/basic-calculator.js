


/*
Description:
Write a function called calculate that takes 3 values. 
The first and third values are numbers. The second value is a character. 
If the character is "+" , "-", "*", or "/", the function will return the result of the corresponding mathematical function on the two numbers. 
If the string is not one of the specified characters, the function should return null (throw an ArgumentException in C#).

calculate(2,"+", 4); //Should return 6
calculate(6,"-", 1.5); //Should return 4.5
calculate(-4,"*", 8); //Should return -32
calculate(49,"/", -7); //Should return -7
calculate(8,"m", 2); //Should return null
calculate(4,"/",0) //should return null
*/


// 1: my solution

const calculate = (num1, operation, num2) => {
  const check = /^([*/+-])$/;
 
  if(!check.test(operation)) return null;
  if(operation === '/' && num2 === 0) return null;
  if(num1 < 0 && operation === '*' && num2 === 0) return 0;
 
 return  eval(`${num1} ${operation} ${num2}`);
}

// put two if with return null together:
  if(!check.test(operation) || operation === '/' && num2 === 0) return null;
 
 
console.log(calculate(3.2,'+', 8)); // 11.2
console.log(calculate(2,'+', 4)); // 6
console.log(calculate(3.2,'-', 8)); // -4.8
console.log(calculate(3.2,'/', 8)); // 0.4
console.log(calculate(3.2,'*', 8)); // 25.6
console.log(calculate(-3,'+', 0)); // -3
console.log(calculate(-3,'-', 0)); // -3
console.log(calculate(49,'/', -7)); // -7
console.log(calculate(-3,'*', 0)); // 0
console.log(calculate(-4,'*', 8)); // -32
console.log(calculate(4,'/',0)); // null
console.log(calculate(-3,'/', 0)); //null
console.log(calculate(-3,'w', 0)); // null
console.log(calculate(8,'w', 2)); // null




// 2:

function calculate(num1, operation, num2) {
  let ops = {
    '+': function(x, y) { return x + y; },
    '-': function(x, y) { return x - y; },
    '*': function(x, y) { return x * y; },
    '/': function(x, y) { return y === 0 ? null : x / y; }
  };

  return (ops[operation] || function() { return null; })(num1, num2);
}



// 3:

function calculate(a, o, b) {
  switch(o) {
     case '+':
         return a+b;
     case '-':
         return a-b;
     case '*':
         return a*b;
     case '/':
         return b===0?null:a/b;
     default:
         return null;
 }
 }



 // 4:

 const calculate = (a, o, b) => /[^-+/*]/.test(o) || !b && o == '/' ? null : eval(a + o + b) || 0;



 // 5:

 function calculate(num1, operation, num2) {
  if (operation === "/" && num2 !== 0) {
      return  num1/num2;
  } else if (operation === "+"){
      return  num1+num2;
  } else if (operation === "*") {
      return  num1 * num2;
  } else if (operation === "-"){
      return  num1 - num2;
  }
  else {
      return null;
  }
}



// 6:

function calculate(num1, op, num2) {
  switch(op){
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    case '/': return (num2 === 0)? null: num1 / num2;
    default: return null;
  }
 }



 // 7:

 function calculate(num1, operation, num2) {
  const OPS = {
    '+': (a,b)=>a+b,
    '-': (a,b)=>a-b,
    '*': (a,b)=>a*b || 0,
    '/': (a,b)=>b === 0 ? null : a/b,
  }
  
  return OPS[operation] ? OPS[operation](num1, num2) : null;
}