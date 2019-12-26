/*  Description:
Character recognition software is widely used to digitise printed texts. 
Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), 
are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to 
handle the following mistakes:

S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake. */



//  1 solutnion with .replace()

const correct = string => {
  for (let i = 0; i < string.length; i++) {
          string = string.replace('5', 'S');
          string = string.replace('0', 'O');
          string = string.replace('1', 'I');
  }
  return string;
};

console.log(correct('L0ND0N')); // LONDON
console.log(correct('DUBL1N')); // DUBLIN
console.log(correct('51NGAP0RE')); // SINGAPORE
console.log(correct('BUDAPE5T')); // BUDAPEST
console.log(correct('PAR15')); // PARIS



//  2 solution with .replace() and regular expression

const correct = string => {
  string = string.replace(/0/g, 'O');
  string = string.replace(/5/g, 'S');
  string = string.replace(/1/g, 'I');
  return string;
};

console.log(correct('L0ND0N')); // LONDON
console.log(correct('DUBL1N')); // DUBLIN
console.log(correct('51NGAP0RE')); // SINGAPORE
console.log(correct('BUDAPE5T')); // BUDAPEST
console.log(correct('PAR15')); // PARIS



//  3 solution with .replace(), regular expression, switch

const correct = string =>
        string.replace(/5|0|1/g, letter => {

                switch (letter) {
                        case '5':
                                return 'S';
                        case '0':
                                return 'O';
                        case '1':
                                return 'I';
                }
        });

console.log(correct('L0ND0N')); // LONDON
console.log(correct('DUBL1N')); // DUBLIN
console.log(correct('51NGAP0RE')); // SINGAPORE
console.log(correct('BUDAPE5T')); // BUDAPEST
console.log(correct('PAR15')); // PARIS



//  4 

const correct = string => {
  string.replace(/5|0|1/g, letter => {
          for (let i = 0; i < letter.length; i++) {
                  string = string.replace('5', 'S');
                  string = string.replace('0', '0');
                  string = string.replace('1', 'I');
          }
  });
  return string;
};

console.log(correct('L0ND0N')); // LONDON
console.log(correct('DUBL1N')); // DUBLIN
console.log(correct('51NGAP0RE')); // SINGAPORE
console.log(correct('BUDAPE5T')); // BUDAPEST
console.log(correct('PAR15')); // PARIS



/* 5 solution create an object, then grab the value from the object 
(the same like switch statement) */

const correct = string => {
  const mistakes = { 5: 'S', 1: 'I', 0: 'O' };

  return string.replace(/5|0|1/g, letter => mistakes[letter]);
  // or /[501]/g or /./
};

console.log(correct('L0ND0N')); // LONDON
console.log(correct('DUBL1N')); // DUBLIN
console.log(correct('51NGAP0RE')); // SINGAPORE
console.log(correct('BUDAPE5T')); // BUDAPEST
console.log(correct('PAR15')); // PARIS



//  6

const correction = { 5: 'S', 1: 'I', 0: 'O' };

const correct = string => string.replace(/[501]/g, letter => correction[letter]);

console.log(correct('L0ND0N')); // LONDON
console.log(correct('DUBL1N')); // DUBLIN
console.log(correct('51NGAP0RE')); // SINGAPORE
console.log(correct('BUDAPE5T')); // BUDAPEST
console.log(correct('PAR15')); // PARIS



// 7 

const correct = string =>
        string
                .replace(/0/g, 'O')
                .replace(/5/g, 'S')
                .replace(/1/g, 'I');

console.log(correct('L0ND0N')); // LONDON
console.log(correct('DUBL1N')); // DUBLIN
console.log(correct('51NGAP0RE')); // SINGAPORE
console.log(correct('BUDAPE5T')); // BUDAPEST
console.log(correct('PAR15')); // PARIS



//  8 .map()

const correct = string => [...string].map(a => ({ '0': 'O', '5': 'S', '1': 'I' }[a] || a)).join('');

console.log(correct('L0ND0N')); // LONDON
console.log(correct('DUBL1N')); // DUBLIN
console.log(correct('51NGAP0RE')); // SINGAPORE
console.log(correct('BUDAPE5T')); // BUDAPEST
console.log(correct('PAR15')); // PARIS



//  9

const correct = string => {
  const mistakes = {
          0: 'O',
          1: 'I',
          5: 'S',
  };

  return string
          .split('')
          .map(x => (mistakes.hasOwnProperty(x) ? mistakes[x] : x))
          .join('');
};

console.log(correct('L0ND0N')); // LONDON
console.log(correct('DUBL1N')); // DUBLIN
console.log(correct('51NGAP0RE')); // SINGAPORE
console.log(correct('BUDAPE5T')); // BUDAPEST
console.log(correct('PAR15')); // PARIS



//  10

const correct = s => s.replace(/[015]/g, e => ({ '0': 'O', '1': 'I', '5': 'S' }[e]));

console.log(correct('L0ND0N')); // LONDON
console.log(correct('DUBL1N')); // DUBLIN
console.log(correct('51NGAP0RE')); // SINGAPORE
console.log(correct('BUDAPE5T')); // BUDAPEST
console.log(correct('PAR15')); // PARIS



//  11

const correct = q => {
        const d = { '0': 'O', 1: 'I', 5: 'S' };
        return q.replace(/(0)|(1)|(5)/g, r => d[r]);
};

console.log(correct('L0ND0N')); // LONDON
console.log(correct('DUBL1N')); // DUBLIN
console.log(correct('51NGAP0RE')); // SINGAPORE
console.log(correct('BUDAPE5T')); // BUDAPEST
console.log(correct('PAR15')); // PARIS



//  12

const correct = s => {
        s = s.split('');
        for (let i = 0; i < s.length; i++) {
                if (s[i] === '5') s[i] = 'S';
                else if (s[i] === '0') s[i] = 'O';
                else if (s[i] === '1') s[i] = 'I';
        }
        return s.join('');
};

console.log(correct('L0ND0N')); // LONDON
console.log(correct('DUBL1N')); // DUBLIN
console.log(correct('51NGAP0RE')); // SINGAPORE
console.log(correct('BUDAPE5T')); // BUDAPEST
console.log(correct('PAR15')); // PARIS



//  13

const correct = string => {
        let arr = string.split('');
        let result = [];
        
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] === '1') {
            result.push('I');
          }
          
          else if (arr[i] === '0') {
            result.push('O');
          }
          
          else if (arr[i] === '5') {
            result.push('S');
          }
          else {
            result.push(arr[i]);
          }
        }
        
        return result.join('');
      }



//  14

const correct = string => {
        let newString = '';
        for (i of string) {
                if (i === '5') newString += 'S';
                else if (i === '0') newString += 'O';
                else if (i === '1') newString += 'I';
                else newString += i;
        }
        return newString;
};

console.log(correct('L0ND0N')); // LONDON
console.log(correct('DUBL1N')); // DUBLIN
console.log(correct('51NGAP0RE')); // SINGAPORE
console.log(correct('BUDAPE5T')); // BUDAPEST
console.log(correct('PAR15')); // PARIS



//  15

const correct = string =>
        string
                .split('')
                .map(el => (el === '0' ? (el = 'O') : el === '1' ? (el = 'I') : el === '5' ? (el = 'S') : el))
                .join('')
                .toString();

console.log(correct('L0ND0N')); // LONDON
console.log(correct('DUBL1N')); // DUBLIN
console.log(correct('51NGAP0RE')); // SINGAPORE
console.log(correct('BUDAPE5T')); // BUDAPEST
console.log(correct('PAR15')); // PARIS
