// import Employee from "./Employee";
// import Person from "./Person";
// import Student from "./Student";

import Subject from "./Subject";

// const maria = new Person('Maria da Consolocao', new Date('1980-01-25'));
// const luiza = new Person('Luiza Mol', new Date('2005-10-02'));

// console.log(maria);
// console.log(luiza);

// const invalidPerson = new Person('Lu', new Date('2000-06-07'))
// const invalidPersonAge = new Person('Luiza Mol', new Date('1900-10-02'));
// const invalidPersonAgeFuture = new Person('Luiza Mol', new Date('2025-10-02'));

// const carolina = new Student('Carolina da Silva', new Date('2005-03-17'));
// const lucas = new Student('Lucas Peixoto Salgueiro', new Date('2006-07-19'));
// const jessica = new Student('Jéssica Bianca Nunes', new Date('2004-06-06'));
// const tamires = new Student('Tamires Santos Bastos', new Date('2005-11-05'));
// const fernando = new Student('Fernando Gonçalves', new Date('2006-09-11'));

// carolina.examsGrades = [25, 20, 25, 23];
// lucas.examsGrades = [25, 20, 25, 23];
// jessica.assignmentsGrades = [50, 45];
// tamires.assignmentsGrades = [47, 42];

// console.log(carolina);
// console.log(lucas);
// console.log(jessica);
// console.log(tamires);
// console.log(fernando);

// const testInterfaceEmployee: Employee = {
//   registration: 'FNC123456791011',
//   salary: 1200.00,
//   admissionDate: new Date(),

//   generateRegistration() {
//     const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
//     return `FNC${randomStr}`;
//   }
// }

// console.log(testInterfaceEmployee);

// const math = new Subject('Matemática');
// const story = new Subject('História');
// const philosophy = new Subject('Filosofia');

// console.log(math);
// console.log(story);
// console.log(philosophy);

const invalidSubject = new Subject('Po');
console.log(invalidSubject);