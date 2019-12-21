/*
Description:
Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

i.e.

friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
Note: keep the original order of the names in the output.
*/


//  1

const friend = friends => {
  // place to store myFriends;

  const myFriends = [];

  // iterate over the friends;

  for (let i = 0; i < friends.length; i++) {
          const friend = friends[i];

          // if the friend name is length 4
          if (friend.length === 4) {
                  // push into my friends
                  myFriends.push(friend);
          }
  }

  return myFriends;
};

console.log(friend(['Ryan', 'Kieran', 'Mark'])); //  ["Ryan", "Mark"] 
