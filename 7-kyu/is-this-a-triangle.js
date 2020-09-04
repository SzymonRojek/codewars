



/*
Is this a triangle

Description:
Implement a method that accepts 3 integer values a, b, c. 

The method should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).

*/



// 1

function isTriangle(a, b, c) {
  a = Number(a);
  b = Number(b);
  c = Number(c);

      if(isNaN(a) || isNaN(b) || isNaN(c)) {
        throw 'Argument is not a number!';
      }
      if(Math.min(a, b, c) < 0) {
        throw 'Argument has to be positive';
      }
      const max = Math.max(a, b, c);
  return a + b + c - max > max;
}


console.log(isTriangle('3','2','2')); // true
console.log(isTriangle('1','1','2')); // false
console.log(isTriangle(-1,5,3)); // argument has to be positive
console.log(isTriangle(5,5,'eee')); // argument is not a number



// 2

function isTriangle(a, b, c) {
  
  [a, b, c] = [a, b, c].sort((x, y) => x - y);
  
  return a + b > c;
}