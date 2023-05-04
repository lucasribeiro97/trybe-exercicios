let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0

for (let index = 0; index < numbers.length; index += 1) {
    soma += numbers[index];
    media = soma / numbers.length
}
console.log(`Média: ${media}`)

if (media > 20) {
    console.log("O valor da média artmética é maior que 20");
} else if (media <= 20) {
    console.log("O valor da média aritmética é menor ou igual a 20");
}