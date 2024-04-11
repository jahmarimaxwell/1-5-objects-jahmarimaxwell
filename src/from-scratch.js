const coolGreeting = (person) => {
  if (person.isCool)
    return `What is UP ${person.name.toUpperCase()}? How you been doin'?`
  else
    return `Greetings ${person.name}, how have you been lately?`
};

const haveBirthday = (person) => {
  person.age++;
};

const becomeSecretAgent = (person, spyHandle) => {
  delete person.name;
  person.spyHandle = spyHandle;
};

const carMaker = (name, maker, year) => {
  let car = { name: name, year: year, maker: maker, needsOilChange: false };
  return car;
};

const weAreNotFriends = (person) => {
  let newName = person.friends[person.friends.length - 1]
  person.friends.splice(person.friends.length - 1, 1)
  return newName;
};

const listHobbies = (person) => {
  for (let hobby in person.hobbies) {
    console.log(`${person.name} likes ${person.hobbies[hobby]}.`);
  }
};

const getNextOpponent = (team) => {
  if (team.matches[0] === undefined) return null
  return team.matches[0].teamName;
};

const listAllKeys = (obj) => {
  return Object.keys(obj);
};

const listAllValues = (obj) => {
  return Object.values(obj);
};

const convertToMatrix = () => {
};

module.exports = {
  coolGreeting,
  haveBirthday,
  becomeSecretAgent,
  carMaker,
  weAreNotFriends,
  listHobbies,
  getNextOpponent,
  listAllKeys,
  listAllValues,
  convertToMatrix,
};
