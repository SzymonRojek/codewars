
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



//  4   with if statement

const allFriends = ['Ryan', 'Ilona', 'Mark'];

const realFriends = [];

const fakeFriends = [];

allFriends.forEach(friend => {

        if (friend.length === 5) {
                realFriends.push(friend);
        } else {
                fakeFriends.push(friend);
        }
});

console.log(realFriends); // ["Ilona"];



//  5 with itenary operator

const allFriends = ['Ryan', 'Ilona', 'Mark'];

const realFriends = [];

const fakeFriends = [];

allFriends.forEach(friend => (friend.length === 5 ? realFriends.push(friend) : fakeFriends.push(friend)));

console.log(realFriends); // ["Ilona"];


//  6 another solution with if statement

const WhoIsMyRealFriend = allFriends => {
        const realFriends = [];
        const notFriends = [];

        allFriends.forEach(friend => {
                if (friend.length === 5) {
                        realFriends.push(friend);
                } else {
                        notFriends.push(friend);
                }
        });

        return realFriends;
};

console.log(WhoIsMyRealFriend(['Ryan', 'Ilona', 'Mark'])); // ["Ilona"];



//   7 the same with itenary operator

const whoIsARealFriend = allFriends => {
        const realFriends = [];
        const fakeFriends = [];

        allFriends.forEach(friend => (friend.length === 5 ? realFriends.push(friend) : fakeFriends.push(friend)));

        return realFriends;
};

console.log(whoIsARealFriend(['Ryan', 'Ilona', 'Mark'])); // ["Ilona"];



