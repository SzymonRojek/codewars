/*  Description:
For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided array (x) for good
ideas 'good' and bad ideas 'bad'. If there are one or two good
ideas, return 'Publish!', if there are more than 2 return 
'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.  */



//  1

const well = x => {
  const counting = {};
  x.forEach(function(i) {
          counting[i] = (counting[i] || 0) + 1;
  });

  if (counting.good === undefined) {
          counting.message = 'Fail!';
  }

  if (counting.good === 1) {
          counting.message = 'Publish!';
  }

  if (counting.good === 2) {
          counting.message = 'Publish!';
  }

  if (counting.good > 2) {
          counting.message = 'I smell a series!';
  }
  return counting.message;
};

console.log(well(['bad', 'bad', 'bad']));
console.log(well(['good', 'bad', 'bad', 'bad', 'bad']));
console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']));



//  2

const well = arr => {
  let counter = 0;
  let message = '';
  arr.forEach(el => {
          if (el === 'good') {
                  counter++;
          }
  });

  if (counter === 0) {
          message = 'Fail!';
  } else if (counter === 1) {
          message = 'Publish!';
  } else if (counter === 2) {
          message = 'Publish!';
  } else if (counter > 2) {
          message = 'I smell a series!';
  }
  return message;
};



// 3 more readable than solution 3

const well = arr => {
  let counter = 0;
  let message = '';
  arr.forEach(el => {
          if (el === 'good') {
                  counter++;
          }
  });

  if (counter === 0) return (message = 'Fail!');
  if (counter > 2) return (message = 'I smell a series!');
  if (counter > 0) return (message = 'Publish!');

  return message;
};



//  4

const well = arr => {
  const goodIdeasCount = arr.reduce((total, current) => (current === 'good' ? (total += 1) : total), 0);

  if (goodIdeasCount > 2) return 'I smell a series!';
  if (goodIdeasCount > 0) return 'Publish!';
  return 'Fail!';
};



// 4 more 