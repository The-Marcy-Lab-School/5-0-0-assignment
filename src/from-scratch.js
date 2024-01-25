const makeIdFunc = () => {
  let i = 0;
  return () => {
    i++;
    return i;
  };
};

// or a fancy one-liner
// const makeIdFunc = (i = 0) => (() => ++i);

const sumOfMultiples = (nums, denominator) => {
  if (denominator === 0) return null;
  return nums.reduce((sum, num) => {
    return num % denominator === 0 ? sum + num : sum;
  }, 0);
};

const makeFriendList = () => {
  const friends = [];

  return {
    getFriends() {
      return [...friends];
    },
    addFriend(name) {
      friends.push(name);
      console.log(`${name} successfully added!`);
      return friends.length;
    },
    removeFriend(name) {
      const removed = friends.splice(friends.indexOf(name), 1);
      if (!removed[0]) {
        return console.log(`${name} not found.`);
      }
      console.log(`${name} successfully removed.`);
      return removed[0];
    },
    displayFriends() {
      if (friends.length === 0) {
        return console.log('You have not added any friends.');
      }
      if (friends.length === 1) {
        return console.log(`${friends[0]} is your friend.`);
      }
      if (friends.length === 2) {
        return console.log(`${friends[0]} and ${friends[1]} are your friends.`);
      }

      console.log(`${friends.slice(0, -1).join(', ')}, and ${friends[friends.length - 1]} are your friends.`);
    },
  };
};

module.exports = {
  makeIdFunc,
  makeFriendList,
  sumOfMultiples,
};
