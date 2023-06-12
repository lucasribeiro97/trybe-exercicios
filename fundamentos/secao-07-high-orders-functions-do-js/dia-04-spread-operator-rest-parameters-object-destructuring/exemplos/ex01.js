// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Morango', 'Mamao', 'Maca'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Leite Ninho', 'Ovomaltine', 'Oreo'];

const fruitSalad = (fruit, additional) => {
  const allInOne = [...specialFruit, ...additionalItens];
  return allInOne;
};

console.log(fruitSalad(specialFruit, additionalItens));