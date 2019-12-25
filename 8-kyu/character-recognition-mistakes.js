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




