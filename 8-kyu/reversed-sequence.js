

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