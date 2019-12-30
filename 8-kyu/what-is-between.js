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
                .fill()  // .fill(a)
                .map((x, i) => a + i); // .map((x,i) => x + i); .map((x,i)=> a + i)

console.log(between(-1, 4)); // [-1, 0, 1, 2, 3, 4]



//  2

const between = (a, b) => {
  const arr = [];

  for (let i = a; i <= b; i++) {
          arr.push(i);
  }
  return arr;
};

console.log(between(-1, 4)); // [-1, 0, 1, 2, 3, 4]



//  3

function between(a, b) {
  const arr = [];
  const min = Math.min(a, b);
  const max = Math.max(a, b);

  for (let i = min; i <= max; i++) {
          arr.push(i);
  }
  return arr;
}
console.log(between(-1, 4)); // [-1, 0, 1, 2, 3, 4]



//  4

const between = (a, b) => {
  const arr = [];
  while (a <= b) {
          arr.push(a++); //  a += 1;
  }
  return arr;
};

console.log(between(-1, 4)); // [-1, 0, 1, 2, 3, 4]