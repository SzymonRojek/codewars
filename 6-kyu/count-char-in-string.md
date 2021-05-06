
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.

1.

```
function count (string) {  
  let counter = {};
  [...string.toLowerCase()].forEach(n => {

    if (! (n in counter)) {
    counter[n] = 1;
    } else {
      counter[n]++;
    }
  })

  return counter ? counter : {};
}

console.log(count("aba")); // { a: 2, b: 1 }
console.log(count(''));   // {}

```

2. 

```

function count (string) {  
  let counter = {};
  [...string.toLowerCase()].forEach(n => {

    if ( counter.hasOwnProperty(n) ) {
      counter[n]++;
    } else {
      counter[n]=1;
    }
  })

  return counter ? counter : {};
}

```

3.

```
function count (string) {  
  let counter = {};
  [...string.toLowerCase()].forEach(n => {
      
    counter[n] = (n in counter) ? counter[n]+1 : 1;  => shorthand
  })

  return counter ? counter : {};
}

```