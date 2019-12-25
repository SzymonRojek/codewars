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
};

console.log(correct('L0ND0N')); // LONDON
console.log(correct('DUBL1N')); // DUBLIN
console.log(correct('51NGAP0RE')); // SINGAPORE
console.log(correct('BUDAPE5T')); // BUDAPEST
console.log(correct('PAR15')); // PARIS


