



/*

Basic JS Calculation averages

Let's build a calculator that can calculate the average for an arbitrary number of arguments.

The test expects you to provide a Calculator object with an average method:

Calculator.average()
The test also expects that when you pass no arguments, it returns 0. The arguments are expected to be integers.

It expects Calculator.average(3,4,5) to return 4.

*/



// 1

var Calculator = {
  average: function() {
    let result = 0;
    
    for(i = 0; i < arguments.length; i++) {
     
      result += arguments[i];
    }
   
   return result? result / arguments.length : 0;
  }
  
 };

 console.log(Calculator.average(2, 4)); // 3
 console.log(Calculator.average()); // 3




 // 2

 var Calculator = {
  average: function(...args) {

     return args.length == 0 ? 0 : args.reduce((a, b) => b + a) /args.length;
  }
 };




 // 3

 var Calculator = {
  average: function() {

    let sum = 0;

    if(arguments.length > 0)
     {
       for(let i = 0; i <arguments.length; i++)
       {
         sum += arguments[i];
       } 
       return sum/i;
     }
     return 0;
   }

};