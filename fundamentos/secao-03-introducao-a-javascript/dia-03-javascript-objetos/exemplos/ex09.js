let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

for (let chaves in car) {
    console.log(chaves, car[chaves]);
}