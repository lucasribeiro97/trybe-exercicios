// console.log('Hello, TypeScript!')

// function printId(id: number | string) {
//   console.log(`Your ID is: ${id}`);
// }

// printId(101);
// printId("202");

// function printId(id: number | string) {
//   if (typeof id === "string") {
//     return console.log(id.toUpperCase());
//   }
//   return console.log(id);
// }

// printId(101);

type PersonalInfo = {
  name: string;
  birthYear: number;
};

function printPersonalInfo(data: PersonalInfo) {
  console.log(`${data.name} was born in ${data.birthYear}.`);
}

printPersonalInfo({ name: 'Rogerinho', birthYear: 1978});