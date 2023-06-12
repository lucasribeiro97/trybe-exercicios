const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const spreadInfos = {...user, ...jobInfos};
console.log(spreadInfos);

const {name, age, nationality} = user;
const {profession, squad, squadInitials} = jobInfos;
const textMessage = `Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`;

console.log(textMessage);
