

/*  The function returns a passed string in an alphabetical 
order e.g ="fundamentals" answer="aadeflmnnstu" */



//  1 

const alphabetOrder = str =>
        str
                .split('')
                .sort()
                .join('');

console.log(alphabetOrder('take')); // 'aekt'
console.log(alphabetOrder('blaze')); // 'abelz'
console.log(alphabetOrder('create')); // 'aceert'
console.log(alphabetOrder('tests')); // 'esstt'



//  2

const alphabetOrder = s => [...s].sort().join``;



//  3

const alphabetOrder = (str) => {
        const string = str.split('');
        
        const sortedString = string.sort((a, b) => {
          if (a < b) {
            return -1;
          } else if (a > b) {
            return 1;
          } else {
            return 0;
          }
        });
        return sortedString.join('');
      }



//  4

const alphabetOrder = str => {
        const arr = [];

        for (let i = 0; i < str.length; i++) {
                arr.push(str[i]);
        }
        const b = arr.sort().join('');

        return b;
};