const isEmpty = (name, age) => {
  if (!name || !age) {
    throw new Error('Todas as informacoes sao necessárias')
  }
}

const isAdult = (age) => {
  if (age < 18) {
    throw new Error('Ops, infelizmente nesse momento voce nao pode fazer as aulas');
  }
}

const studentRegister = (name, age) => {
  try {
    isEmpty(name, age);
    isAdult(age);
    return `${name}, seja bem-vindo(a) à AuTrybe!`;
  } catch (error) {
    return error.message;
  }
}
console.log(studentRegister('Lucas'));