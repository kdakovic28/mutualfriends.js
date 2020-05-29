// Write your code below


let bobsFollowers = ['Filip', 'Marko', 'Ben', 'Tina'];
let tinasFollowers = ['Filip', 'Marko', 'Eki'];
let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
};