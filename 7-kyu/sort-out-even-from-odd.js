

/*
Return an array/list where Even numbers come first then odds

Since , Men are stronger than Boys , Then Even numbers in ascending order While odds in descending .

Array/list size is at least *4*** .

Array/list numbers could be a mixture of positives , negatives .

Have no fear , It is guaranteed that no Zeroes will exists . !alt

Repetition of numbers in the array/list could occur , So (duplications are not included when separating).   */



//  1

const menFromBoys = arr => {
  const getEven = [];
  const getOdd = [];

  for (let i = 0; i < arr.length; i++) {
          if (arr[i] % 2 === 0) {
                  getEven.push(arr[i]);
          } else {
                  getOdd.push(arr[i]);
          }
  }

  const ascEvenOrder = getEven.sort((a, b) => a - b);
  const descOddOrder = getOdd.sort((a, b) => b - a);

  const newArr = [...ascEvenOrder, ...descOddOrder];

  const noDuplicates = [];
  for (let i = 0; i < newArr.length; i++) {
          if (noDuplicates.indexOf(newArr[i]) === -1) {
                  noDuplicates.push(newArr[i]);
          }
  }

  // Also I can write shorter version of noDuplicates: const noDuplicastes =  [...new Set(newArr)];

  return noDuplicates;
};

console.log(menFromBoys([7, 3, 14, 17]));
console.log(menFromBoys([2, 43, 95, 90, 37]));
console.log(menFromBoys([20, 33, 50, 34, 43, 46]));
console.log(menFromBoys([82, 91, 72, 76, 76, 100, 85]));
console.log(menFromBoys([2, 15, 17, 15, 2, 10, 10, 17, 1, 1]));
console.log(menFromBoys([-32, -39, -35, -41])); //
console.log(menFromBoys([-64, -71, -63, -66, -65]));
console.log(menFromBoys([-94, -99, -100, -99, -96, -99]));
console.log(menFromBoys([-53, -26, -53, -27, -49, -51, -14]));
console.log(menFromBoys([-17, -45, -15, -33, -85, -56, -86, -30]));
console.log(menFromBoys([12, 89, -38, -78]));
console.log(menFromBoys([2, -43, 95, -90, 37]));
console.log(menFromBoys([82, -61, -87, -12, 21, 1]));
console.log(menFromBoys([63, -57, 76, -85, 88, 2, -28]));
console.log(menFromBoys([49, 818, -282, 900, 928, 281, -282, -1]));



//  2

function menFromBoys(arr) {
  arr = Array.from(new Set(arr));

  const odd = arr.filter(a => a % 2).sort((a, b) => b - a);
  const even = arr.filter(a => a % 2 === 0).sort((a, b) => a - b);
  
  return even.concat(odd);
}