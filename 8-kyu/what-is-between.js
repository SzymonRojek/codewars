/* Description:
Complete the function that takes two integers (a, b, where a < b) 
and return an array of all integers between the input parameters, including them.

For example:

a = 1
b = 4
--> [1, 2, 3, 4] */


//  1 

const between = (a, b) =>
        Array(b - a + 1)
                .fill()
                .map((_, idx) => a + idx);

console.log(between(-1, 4)); // [-1, 1, 0, 2, 3, 4]
