
/*
Description:
Make a program that filters a list of strings and returns a list 
with only your friends name in it.
If a name has exactly 4 letters in it, you can be sure that it 
has to be a friend of yours! Otherwise, you can be sure he's not...
Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
i.e.
friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
Note: keep the original order of the names in the output.
*/



//  1

const whoIsaRealFriend = allFriends => {
  // place to store realFriends
  const realFriends = [];

  // iterate over the allFriends
  for (let i = 0; i < allFriends.length; i++) {
          // if the friend name is length 4

          if (allFriends[i].length === 4) {
                  // push into my realFriend
                  realFriends.push(allFriends[i]);
          }
  }
  return realFriends;
};

console.log(whoIsaRealFriend(['Ryan', 'Kieran', 'Mark'])); //  ["Ryan", "Mark"];



//  2 

const whoIsaRealFriend = allFriends => {
  const realFriends = [];

  for (let i = 0; i < allFriends.length; i++) {
          // created variable to overwrite allFriends[i]
          const checkAllFriends = allFriends[i];

          if (checkAllFriends.length === 4) {
                  realFriends.push(checkAllFriends);
          }
  }
  return realFriends;
};

console.log(whoIsaRealFriend(['Ryan', 'Kieran', 'Mark'])); //  ["Ryan", "Mark"];



//  3

const whoIsaRealFriend = allFriends => allFriends.filter(allFriends => allFriends.length === 5);

console.log(whoIsaRealFriend(['Ryan', 'Ilona', 'Mark'])); //  ["Ilona"];



//  4

const names = ['Ryan', 'Ilona', 'Mark'];

const realFriends = [];

const badFriends = [];

names.forEach(function(item) {
        if (item.length === 5) {
                realFriends.push(item);
        } else {
                badFriends.push(item);
        }
});

console.log(`my good friend is: ${realFriends}`); // ["Ilona"];
console.log(`my bad friends are: ${badFriends}`); // ['Ryan', 'Mark']
