


/*  Description:
Terminal game move function

In this game, the hero moves from left to right. 
The player rolls the dice and moves the number of spaces indicated by the dice two times.

Create a function for the terminal game that takes the current position of the hero 
and the roll (1-6) and return the new position.

Example:
move(3, 6) should equal 15  */


console.log(move(3, 6)); // 15
//  1

const move = (position, roll) => position + roll * 2;

console.log(move(0, 4)); // 8
console.log(move(3, 6)); // 15
console.log(move(2, 5)); // 12



//  2

const move = (position, roll) => position + roll + roll;

console.log(move(0, 4)); // 8
console.log(move(3, 6)); // 15
console.log(move(2, 5)); // 12



//  3

const move = (position, roll) => {
        if (roll > 0 && roll <= roll) {
                return position + roll * 2;
        }

        // or if(roll > 0 && roll <= 6) {return position + roll * 2}
};

console.log(move(0, 4)); // 8
console.log(move(3, 6)); // 15
console.log(move(2, 5)); // 12



//  4

const move = (position, roll) => Math.floor(position + roll * 2);
console.log(move(0, 4)); // 8
console.log(move(3, 6)); // 15
console.log(move(2, 5)); // 12



//  5

const move = (position, roll) => eval(roll * 2 + position);

console.log(move(0, 4)); // 8
console.log(move(3, 6)); // 15
console.log(move(2, 5)); // 12



//  6

const move = (position, roll) => {
  const multiply = roll * 2;
  const add = position + multiply;
  return add;
};
console.log(move(0, 4)); // 8
console.log(move(3, 6)); // 15
console.log(move(2, 5)); // 12



//  7

const move = (position, roll) => {
  if (roll == 1) {
          return position + 2;
  }
  if (roll == 2) {
          return position + 4;
  }
  if (roll == 3) {
          return position + 6;
  }
  if (roll == 4) {
          return position + 8;
  }
  if (roll == 5) {
          return position + 10;
  }
  if (roll == 6) {
          return position + 12;
  }
  return position;
};

console.log(move(0, 4)); // 8
console.log(move(3, 6)); // 15
console.log(move(2, 5)); // 12
