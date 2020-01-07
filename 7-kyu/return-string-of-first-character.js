

/*  In this exercise, a string is passed to a method and a new string 
has to be returned with the first character of each word in the string.

For example:

"This Is A Test" ==> "TIAT"  */



//  1

const makeString = s =>
        s
                .split(' ')
                .map(el => el[0])
                .join('');

console.log(makeString('sees eyes xray yoat')); // 'sexy'
console.log(makeString('brown eyes are nice')); // 'bean'
console.log(makeString('cars are very nice')); // 'cavn'
console.log(makeString('kaks de gan has a big head')); // 'kdghabh'



//  2

const makeString = s => {
  const newArr = [];
  s.split(' ').forEach(element => {
          if (element[0] !== undefined) {
                  newArr.push(element[0]);
          }
  });
  return newArr.join('');
};