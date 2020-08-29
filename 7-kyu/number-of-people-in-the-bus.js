



/*

Number of people in the bus
There is a bus moving in the city, and it takes and drop some people in each bus stop.

You are provided with a list (or array) of integer arrays (or tuples). 
Each integer array has two items which represent number of people get into bus 
(The first item) and number of people get off the bus (The second item) in a bus stop.

Your task is to return number of people who are still in the bus after the last bus station (after the last array). 
Even though it is the last bus stop, the bus is not empty and some people are still in the bus, 
and they are probably sleeping there :D

Take a look on the test cases.

Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. 
So the return integer can't be negative.

The second value in the first integer array is 0, since the bus is empty in the first bus stop.

*/



// 1


const number = function(busStops){
  
  let inBus = [];
  let offBus = [];

  busStops.forEach(el => {
    inBus.push(el[0]);
    offBus.push(el[1]);
  });

  inBus = inBus.reduce((a, b) => a + b, 0);
  offBus = offBus.reduce((a, b) => a + b, 0);

  return inBus - offBus;
}

console.log(number([[10,0],[3,5],[5,8]])); // 5
console.log(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]])); // 17
console.log(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]])); // 21



// 2

const number = function(busStops) {
  
  let allPeople = 0;

  for (let i = 0; i < busStops.length; i++) {
    const el = busStops[i];

    allPeople += el[0];
    allPeople -= el[1];

    // allPeople += el[0] - el[1];
  }

  return allPeople;
}



// 3

const number = busStops => busStops.reduce((a, b) => a + b[0] - b[1], 0);