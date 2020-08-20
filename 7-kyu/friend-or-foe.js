
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



//  1 solution with loop and if statement

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



//  2 solution with loop and if statement

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



//  3 solution with filter

const whoIsaRealFriend = allFriends => allFriends.filter(allFriends => allFriends.length === 5);

console.log(whoIsaRealFriend(['Ryan', 'Ilona', 'Mark'])); //  ["Ilona"];



//  4  solution with for each and if statement

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



//  5 for each with ternary operator

const allFriends = ['Ryan', 'Ilona', 'Mark'];

const realFriends = [];

const fakeFriends = [];

allFriends.forEach(friend => (friend.length === 5 ? realFriends.push(friend) : fakeFriends.push(friend)));

console.log(realFriends); // ["Ilona"];


//  6 another solution with if statement

const whoIsMyRealFriend = allFriends => {
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

console.log(whoIsMyRealFriend(['Ryan', 'Ilona', 'Mark'])); // ["Ilona"];



//   7 the same with ternary operator

const whoIsARealFriend = allFriends => {
        const realFriends = [];
        const fakeFriends = [];

        allFriends.forEach(friend => (friend.length === 5 ? realFriends.push(friend) : fakeFriends.push(friend)));

        return realFriends;
};

console.log(whoIsARealFriend(['Ryan', 'Ilona', 'Mark'])); // ["Ilona"];



//  8 solution with loop and ternary operator

const whoIsaRealFriend = allFriends => {
        const realFriends = [];

        for (let i = 0; i < allFriends.length; i++) {
                // created variable to overwrite allFriends[i]
                const checkAllFriends = allFriends[i];

                checkAllFriends.length >= 5 ? realFriends.push(checkAllFriends) : false;
        }

        return realFriends;
};

console.log(whoIsaRealFriend(['Ryan', 'Kieran', 'Mark', 'Ilona'])); // ["Kieran", "Ilona"]



// 9 old idea with return with no arrow function

function whoIsaRealFriend(allFriends) {
        return allFriends.filter( function (allFriends) { 
                return allFriends.length === 5 });
}

whoIsaRealFriend(['Ryan', 'Ilona', 'Mark']); // ["Ilona"];



//   10 solution with splice method and i--

const whoIsARealFriend = people => {

        for (i = people.length - 1; i >= 0; i--) {

                const friend = people[i];

                if (friend.length !== 5) {
                        people.splice(i, 1);
                }
        }
        return people;
};

console.log(whoIsARealFriend(['Krzysztof', 'Ilona', 'Basia']));
// ['Ilona', 'Basia'];



//   11 solution splice method with the ternary operator

const whoIsARealFriend = people => {
        for (i = people.length - 1; i >= 0; i--) {
                
                const friend = people[i];

                friend.length !== 5 ? people.splice(i, 1) : false;
                // also you can write undefined, null
        }
        return people;
};

console.log(whoIsARealFriend(['Krzysztof', 'Ilona', 'Basia']));
// ['Ilona', 'Basia'];



//   12 

const whoIsMyFriend = friends => {
        const myFriends = [];
        const fakeFriends = [];
        const numberOfFriends = friends.length;
        for (let i = 0; i < numberOfFriends; i++) {
                const friendName = friends[i];
                const isFriend = friendName.length === 5;

                // Ternary operator
                isFriend ? myFriends.push(friendName) : fakeFriends.push(friendName);

                // if (isFriend) {
                //         myFriends.push(friendName);
                // } else {
                //         fakeFriends.push(friendName);
                // }
        }
        return myFriends;
};

console.log(whoIsMyFriend(['Basia', 'Krzysztof', 'Monika', 'Anna'])); // ["Basia"];




// 13

function friend(friends){
  
  for (let i = friends.length-1; i >= 0; i--) {
    const friend = friends[i];

    if(friend.length !== 4) friends.splice(i, 1);
    
  }

  return friends;
}