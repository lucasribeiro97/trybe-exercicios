const studentMedium = (number1, number2, number3, number4) => {
  try {
    medium(number1, number2, number3, number4);
    isNumber(number1, number2, number3, number4);
    return media;
  } catch (error) {
    return error.message;
  }
}

const medium = (number1, number2, number3, number4) => {
  media = (number1 + number2 + number3 + number4) / 4
  return media
}

const isNumber = (number1, number2, number3, number4) => {
  if (typeof number1 !== 'number' || typeof number2 !== 'number' || typeof number3 !== 'number' || typeof number4 !== 'number') {
    throw new Error('Digite um número')
  }
}

console.log(studentMedium(10, 10, '10', 9));