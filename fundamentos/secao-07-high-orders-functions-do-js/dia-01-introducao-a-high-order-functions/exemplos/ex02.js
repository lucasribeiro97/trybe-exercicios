const numbers = [19, 21, 30, 3, 45, 22, 15];

numbers.find((number) => {
  if (number % 3 === 0 && number % 5 ===0) {
    console.log(number);
  }
})

