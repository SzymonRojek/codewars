


/*
Description:
You are given the length and width of a 4-sided polygon. 
The polygon can either be a rectangle or a square.
If it is a square, return its area. If it is a rectangle, return its perimeter.

area_or_perimeter(6, 10) --> 32
area_or_perimeter(4, 4) --> 16
*/



// 1:

const areaOrPerimeter = (a , b) => a !== b ? 2*(a+b) : a * b;




// 2:

const areaOrPerimeter = (a , b) => a > b || b > a ? (2 * a) + (2 * b) : a * b;



