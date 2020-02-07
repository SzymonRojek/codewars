

/*
Description:
Nathan loves cycling.

Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

For example:

time = 3 ----> litres = 1

time = 6.7---> litres = 3

time = 11.8--> litres = 5

*/



//  1

function litres(time) {
  const getMinutes = time * 60;

  const drinkPerHour = 0.5;

  const toDrink = parseInt((getMinutes * drinkPerHour) / 60);

  return toDrink;
}

console.log(litres(2)); // 1, 'should return 1 litre'
console.log(litres(1.4)); // 0, 'should return 0 litres'
console.log(litres(12.3)); // 6, 'should return 6 litres'
console.log(litres(0.82)); // 0, 'should return 0 litres'
console.log(litres(11.8)); // 5, 'should return 5 litres'
console.log(litres(1787)); // 893, 'should return 893 litres'
console.log(litres(0)); // 0, 'should return 0 litres'



//  2

const litres = time => Math.floor(time * 0.5);



//  3

const litres = time => Math.floor(time / 2);



//  4

const litres = time => parseInt(time / 2);



//  5

function litres(time) {
  const litre = 0.5;
  if (time * litre < 1) {
          return 0;
  }
  return Math.floor(time * litre);
}



//  6

const litres = time => parseInt(time * 0.5);



//  7

const litres = time => {
  const heDrinks = 0.5;
  return Math.floor(time * heDrinks);
};