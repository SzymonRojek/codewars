

/*  Description:
Get the number n (n>0) to return the reversed sequence from n to 1.

Example : n=5 >> [5,4,3,2,1]  */



//  1

const reverseSeq = n =>
        Array(n)
                .fill(1)
                .map((v, i) => i + 1)
                .reverse();

console.log(reverseSeq(5)); // [5, 4, 3, 2, 1]



//  2

const reverseSeq = n => {
  const arr = [];

  for (let i = n; i > 0; i--) {
          arr.push(i);
  }
  return arr;
};



//  3

const reverseSeq = n =>
        Array(n)
                .fill(0)
                .map((e, i) => n - i);

        

//  4

const reverseSeq = length => Array.from({ length }, () => length--);



//  5

const reverseSeq = n => {
  if (n < 2) return [n];
  return [n].concat(reverseSeq(n - 1));
};



//  5

const reverseSeq = n => [...Array(n)].map((_, i) => n - i);



//  6

const reverseSeq = n => Array.from({ length: n }, (a, i) => n - i);



//  7

const reverseSeq = n => [...Array(n)].map(_ => n--); // [...Array(n)].map(()=>n--)