

/*  Sum the array:

Add a method 'sum' to all array objects, which sums all the numbers in it. You should return 0 if the array is empty:

let arr = [1,2,3,4];
arr.sum();

let arr = [10,28,14,33];
arr.sum();  */ 


// 1

Array.prototype.sum = function() {
  return this.reduce((a, b) => a + b, 0);
};

console.log([1,2,3,4].sum()); // 10



// 2

Array.prototype.sum= function(){
  
  var sum=0;

  for (var i=0; i<this.length; ++i)
    sum += this[i];

  return sum;
}
console.log([1,2,3,4].sum()); // 10



// 3

Array.prototype.sum = function() {
  function getSum(total, num) {
    return total + num;
  }
  return this.reduce(getSum, 0);
}
console.log([1,2,3,4].sum()); // 10



// 4

Array.prototype.sum = function(){
  let result = 0;
  this.forEach( num => {
    result += num;
  });
  return result;
}

console.log([1,2,3,4].sum()); // 10


