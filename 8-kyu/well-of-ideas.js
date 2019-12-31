/*  Description:
For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.  */



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
