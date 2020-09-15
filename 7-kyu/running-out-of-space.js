



/*
Running out of space

Kevin is noticing his space run out! Write a function that removes the spaces from the values and returns an array showing the space decreasing. 

For example, running this function on the array ['i', 'have','no','space'] would produce ['i','ihave','ihaveno','ihavenospace'].

*/ 



// 1

function spacey(array) {
  const newArray = [];
  
  for (let maxIndex = 0; maxIndex < array.length; maxIndex++) {
    let word = '';
    
    for (let i = 0; i <= maxIndex; i++) {
      word += array[i];
      
    }
    
    newArray.push(word);
  }
  
  return newArray;
}

console.log(spacey(['kevin', 'has','no','space'])); 
// [ 'kevin', 'kevinhas', 'kevinhasno', 'kevinhasnospace']
console.log(spacey(['this','cheese','has','no','holes'])); // ['this','thischeese','thischeesehas','thischeesehasno','thischeesehasnoholes']


/*
  [ maxIndex ,  i  , array.length  ]
  [--------------------------------]
  [ 0           0    3             ]
  [ 1           0    3             ]
  [ 1           1    3             ]
  [ 2           0    3             ]
  [ 2           1    3             ]
  [ 2           2    3             ]

  */