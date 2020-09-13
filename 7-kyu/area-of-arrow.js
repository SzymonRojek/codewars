



/*
Area of an arrow

An arrow is formed in a rectangle with sides a and b by joining the bottom corners 
to the midpoint of the top edge and the centre of the rectangle.

a and b are integers and > 0

Write a function which returns the area of the arrow.

*/



// 1

function arrowArea(a, b) {
  return (1/2) * a * (b/2);
}

console.log(arrowArea(4,2)); // 2
console.log(arrowArea(7,6)); // 10.5
console.log(arrowArea(25,25)); // 156.25




// 2

const arrowArea = (a,b) => a * b / 4;



// 3

const arrowArea = (a,b) => 0.25 * a * b;