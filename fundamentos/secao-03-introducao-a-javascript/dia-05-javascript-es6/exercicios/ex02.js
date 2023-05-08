// Executando esse código, recebe-se um erro `TypeError: Assignment to constant variable.`
let pessoa = {
    nome: 'Henri',
    idade: 20
}

pessoa.nome = 'Luna';
pessoa.idade = 19
console.log('Nome:', pessoa.nome);
console.log('Idade:', pessoa.idade);